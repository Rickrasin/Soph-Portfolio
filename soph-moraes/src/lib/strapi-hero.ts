// lib/strapi-home.ts
export type SocialLink = {
    id: number;
    provider: "instagram" | "linkedin" | string;
    url: string;
};

export type CtaButton = {
    id: number;
    label: string;
    href?: string | null;
    variant?: string | null;
    isExternal?: boolean | null;
};

export type HomeHero = {
    title: string;
    subtitle?: string | null;
    description?: string | null;
    quote?: string | null;
    primaryButton?: CtaButton | null;
    secondaryButton?: CtaButton | null;
    socialLinks: SocialLink[];
};

function stripOuterQuotes(s?: string | null) {
    if (!s) return s ?? null;
    const trimmed = s.trim();
    if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
        return trimmed.slice(1, -1);
    }
    return s;
}

/**
 * Busca o Single Type `home-page` no Strapi e normaliza os campos.
 * - Usa populate=* para garantir componentes.
 * - Aceita STRAPI_API_TOKEN (opcional) se o endpoint não for público.
 * - Retorna null se não houver conteúdo publicado.
 */
export async function getHomeHero(): Promise<HomeHero | null> {
    const base = process.env.NEXT_PUBLIC_STRAPIURL;
    if (!base) {
        throw new Error("Env NEXT_PUBLIC_STRAPIURL não definido.");
    }

    const headers: Record<string, string> = {};
    if (process.env.STRAPI_API_TOKEN) {
        headers.Authorization = `Bearer ${process.env.STRAPI_API_TOKEN}`;
    }

    const res = await fetch(`${base}/api/home-page?populate=*`, {
        cache: "force-cache",
        next: { revalidate: 60 * 10 }, // revalida a cada 10min
        headers,
    });

    if (!res.ok) {
        console.error(`Strapi /home-page status=${res.status}`);
        return null;
    }

    const json = await res.json();

    // Compat: algumas instalações retornam data.attributes; outras já em data
    const raw = json?.data?.attributes ?? json?.data ?? json;
    if (!raw) return null;

    const primary = raw.primaryButton
        ? {
            id: raw.primaryButton.id,
            label: raw.primaryButton.label,
            href: raw.primaryButton.href ?? null,
            variant: raw.primaryButton.variant ?? null,
            isExternal: !!raw.primaryButton.isExternal,
        }
        : null;

    const secondary = raw.secondaryButton
        ? {
            id: raw.secondaryButton.id,
            label: raw.secondaryButton.label,
            href: raw.secondaryButton.href ?? null,
            variant: raw.secondaryButton.variant ?? null,
            isExternal: !!raw.secondaryButton.isExternal,
        }
        : null;

    const socialLinks: SocialLink[] = Array.isArray(raw.socialLinks)
        ? raw.socialLinks.map((s: any) => ({
            id: s.id,
            provider: s.provider,
            url: s.url,
        }))
        : [];

    const result: HomeHero = {
        title: raw.Title ?? raw.title ?? "",
        subtitle: raw.subtitle ?? null,
        description: raw.description ?? null,
        quote: stripOuterQuotes(raw.quote ?? null),
        primaryButton: primary,
        secondaryButton: secondary,
        socialLinks,
    };

    return result;
}

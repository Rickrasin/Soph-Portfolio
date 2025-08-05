import { ImageType, Project } from "@/types/project";

// 🔁 Todos os projetos (para listar ou gerar páginas estáticas)
export async function getAllProjects(): Promise<Project[]> {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPIURL;
  if (!strapiUrl) {
    throw new Error(
      "NEXT_PUBLIC_STRAPIURL is not defined in environment variables."
    );
  }
  const res = await fetch(
    "http://127.0.0.1:1337/api/projects?populate[image][fields][0]=url&populate[gallery][fields][0]=url",
    {
      cache: "force-cache", // Garante SSG
      next: { revalidate: 60 * 60 * 24 } // opcional: revalida a cada 24h se usar ISR
    }
  );

  const data = await res.json();

  return data.data.map((item: Project) => ({
    id: item.id,
    slug: item.slug,
    title: item.title,
    category: item.category,
    description: item.description,
    image: item.image
      ? {
          id: item.image.id,
          documentId: item.image.documentId.toString(),
          url: strapiUrl + item.image.url
        }
      : undefined,
    gallery: item.gallery?.map((img: any) => img?.url) ?? [],
    link: item.link
  }));
}

// 🔎 Projeto único por slug
export async function getProjectBySlug(
  slug: string
): Promise<Project | undefined> {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPIURL;
  if (!strapiUrl) {
    throw new Error(
      "NEXT_PUBLIC_STRAPIURL is not defined in environment variables."
    );
  }

  const res = await fetch(
    `${strapiUrl}/api/projects?filters[slug][$eq]=${slug}&populate[image][fields][0]=url&populate[gallery][fields][0]=url`,
    { cache: "force-cache" }
  );

  const data = await res.json();
  const item = data.data?.[0];

  if (!item) return undefined;

  return {
    id: item.id,
    slug: item.slug,
    title: item.title,
    category: item.category,
    description: item.description,
    image: item.image
      ? {
          id: item.image.id,
          documentId: item.image.documentId.toString(),
          url: strapiUrl + item.image.url
        }
      : undefined,
    gallery:
      item.gallery?.map((img: ImageType) => ({
        id: img.id,
        documentId: img.documentId,
        url: strapiUrl + img.url
      })) ?? [],
    link: item.link
  };
}

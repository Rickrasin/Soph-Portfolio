import { ImageType, Project } from "@/types/project";

// 🔁 Todos os projetos (para listar ou gerar páginas estáticas)
export async function getAllProjects(): Promise<Project[]> {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPIURL;
  if (!strapiUrl) {
    throw new Error(
      "NEXT_PUBLIC_STRAPIURL is not defined in environment variables."
    );
  }

  try {
    const res = await fetch(
      `${strapiUrl}/api/projects?populate[image][fields][0]=url&populate[gallery][fields][0]=url`,
      {
        cache: "force-cache",
        next: { revalidate: 60 * 60 * 24 }
      }
    );

    // Se o Strapi responder com erro de HTTP, retorna array vazio
    if (!res.ok) {
      console.error(`Strapi responded with status ${res.status}`);
      return [];
    }

    const data = await res.json();

    // Se veio null ou não é array, retorna vazio
    const items = Array.isArray(data.data) ? data.data : [];
    return items.map((item: Project) => ({
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
      gallery: item.gallery?.map((img: ImageType) => img) ?? [],
      link: item.link
    }));
  } catch (error) {
    console.error("Error fetching projects from Strapi:", error);
    return [];
  }
}

// 🔎 Projeto único por slug (exemplo de como você também pode tratar erros aqui)
export async function getProjectBySlug(
  slug: string
): Promise<Project | undefined> {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPIURL;
  if (!strapiUrl) {
    throw new Error(
      "NEXT_PUBLIC_STRAPIURL is not defined in environment variables."
    );
  }

  try {
    const res = await fetch(
      `${strapiUrl}/api/projects?filters[slug][$eq]=${slug}&populate[image][fields][0]=url&populate[gallery][fields][0]=url`,
      { cache: "force-cache" }
    );
    if (!res.ok) {
      console.error(
        `Strapi responded with status ${res.status} for slug=${slug}`
      );
      return undefined;
    }

    const data = await res.json();
    const item = Array.isArray(data.data) ? data.data[0] : undefined;
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
  } catch (error) {
    console.error(`Error fetching project '${slug}' from Strapi:`, error);
    return undefined;
  }
}

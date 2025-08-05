export interface TextNode {
  type?: string;
  text: string;
}

export interface Block {
  type: string;
  children: TextNode[];
}

export interface ImageType {
  id: number;
  documentId: string;
  url: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  image?: ImageType;
  gallery?: ImageType[];
  description?: Block[];
  link?: string;
}

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
  title: string;
  category: string;
  image?: ImageType | null;
  gallery?: ImageType[];
  description: Block[];
  link: string;
}

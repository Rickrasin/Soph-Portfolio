import { Block } from "@/types/project";

// Função para renderizar texto rico (RichText)
export const renderRichText = (content: Block[] | undefined) => {
  if (!content || content.length === 0) return null;
  return content?.map((block, i) => {
    const textContent = block.children?.map((child, j) => (
      <span key={j}>{child.text}</span>
    ));

    switch (block.type) {
      case "paragraph":
        return (
          <p key={i} className="leading-relaxed">
            {textContent}
          </p>
        );
      case "heading":
      case "heading1":
      case "heading2":
        return (
          <h3 key={i} className="text-base font-bold mt-2">
            {textContent}
          </h3>
        );
      case "list":
      case "ul":
        return (
          <ul key={i} className="list-disc pl-6">
            {block.children.map((li, j) => (
              <li key={j}>{li.text}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  });
};

export const extractPlainText = (blocks: Block[] | undefined): string => {
  if (!blocks || blocks.length === 0) return "";

  return blocks
    .flatMap((block) => block.children.map((child) => child.text))
    .join(" ");
};

export const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

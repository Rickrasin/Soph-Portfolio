import React from "react";

interface ChatTailProps {
  direction?: "bottom" | "top" | "left" | "right";
  className?: string;
  color?: string;
  size?: number;
}

const ChatTail = ({
  direction = "bottom",
  className = "",
  color = "#ad333b", // cor de crimsonWine
  size = 20
}: ChatTailProps) => {
  const triangleBase = size * 1.2;
  const triangleHeight = size;

  const styleMap: Record<string, React.CSSProperties> = {
    bottom: {
      borderRight: `${triangleBase}px solid transparent`,
      borderTop: `${triangleHeight}px solid ${color}`
    },
    top: {
      borderRight: `${triangleBase}px solid transparent`,
      borderBottom: `${triangleHeight}px solid ${color}`
    },
    left: {
      borderBottom: `${triangleBase}px solid transparent`,
      borderRight: `${triangleHeight}px solid ${color}`
    },
    right: {
      borderBottom: `${triangleBase}px solid transparent`,
      borderLeft: `${triangleHeight}px solid ${color}`
    }
  };

  const positionMap: Record<string, string> = {
    bottom: "top-full left-12",
    top: "bottom-full left-12",
    left: "right-full top-6",
    right: "left-full top-6"
  };

  return (
    <div
      className={`absolute w-0 h-0 z-10 ${positionMap[direction]} ${className}`}
      style={styleMap[direction]}
    />
  );
};

export default ChatTail;

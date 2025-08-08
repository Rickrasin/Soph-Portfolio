import React from "react";
import ChatTail from "@/components/layout/about/chatTail";

interface ChatBoxProps {
  children: React.ReactNode;
  direction?: "bottom" | "top" | "left" | "right";
  className?: string;
  tailSize?: number;
}

const ChatBox = ({
  children,
  direction = "bottom",
  className = "",
  tailSize = 120
}: ChatBoxProps) => {
  return (
    <div
      className={`relative p-6 py-12 bg-crimsonWine text-white rounded-2xl shadow-md w-fit ${className}`}
    >
      <ChatTail direction={direction} size={tailSize} />
      {children}
    </div>
  );
};

export default ChatBox;

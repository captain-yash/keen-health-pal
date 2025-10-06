import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: {
    role: "user" | "assistant";
    content: string;
  };
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex gap-3 p-4 rounded-lg animate-in fade-in slide-in-from-bottom-4 duration-500",
        isUser ? "bg-secondary ml-8" : "bg-card mr-8"
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
          isUser ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
        )}
      >
        {isUser ? <User size={18} /> : <Bot size={18} />}
      </div>
      <div className="flex-1 space-y-2 pt-1">
        <p className="text-sm font-medium">{isUser ? "You" : "Health Assistant"}</p>
        <div className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</div>
      </div>
    </div>
  );
};

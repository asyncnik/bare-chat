interface ChatMessageProps {
  message: string;
  sender: string;
  timestamp: Date;
  isOwn: boolean;
}

const ChatMessage = ({ message, sender, timestamp, isOwn }: ChatMessageProps) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"} mb-4 animate-in slide-in-from-bottom-2 duration-300`}>
      <div className={`max-w-[70%] space-y-1 ${isOwn ? "items-end" : "items-start"} flex flex-col`}>
        {!isOwn && (
          <span className="text-xs font-medium text-muted-foreground px-3">
            {sender}
          </span>
        )}
        <div
          className={`rounded-2xl px-4 py-2.5 shadow-sm ${
            isOwn
              ? "bg-[hsl(var(--message-sent))] text-white rounded-br-sm"
              : "bg-[hsl(var(--message-received))] text-foreground border border-border/50 rounded-bl-sm"
          }`}
        >
          <p className="text-sm leading-relaxed break-words">{message}</p>
        </div>
        <span className="text-xs text-muted-foreground px-3">
          {formatTime(timestamp)}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;

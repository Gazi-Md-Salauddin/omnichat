"use client";

type Message = {
  id: number;
  sender: "me" | "other";
  text: string;
  time: string;
  seen?: boolean;
};

const messages: Message[] = [
  {
    id: 1,
    sender: "other",
    text: "Hey! How are you?",
    time: "10:38 AM",
  },
  {
    id: 2,
    sender: "me",
    text: "I'm good! How about you?",
    time: "10:39 AM",
    seen: true,
  },
  {
    id: 3,
    sender: "other",
    text: "I'm doing great 😊",
    time: "10:40 AM",
  },
  {
    id: 4,
    sender: "other",
    text: "Are you working on the new project?",
    time: "10:41 AM",
  },
  {
    id: 5,
    sender: "me",
    text: "Yes! I'm building a messaging app.",
    time: "10:42 AM",
    seen: true,
  },
];

export default function MessageList() {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-3">

        {/* Date */}
        <div className="mb-3 flex justify-center">
          <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] text-gray-500">
            Today
          </span>
        </div>

        {/* Messages */}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "me"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] px-4 py-2.5 sm:max-w-[65%] ${
                message.sender === "me"
                  ? "rounded-2xl rounded-br-md bg-violet-600"
                  : "rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.06]"
              }`}
            >
              {/* Message text */}
              <p className="break-words text-sm leading-6 text-white">
                {message.text}
              </p>

              {/* Time + Seen */}
              <div
                className={`mt-1 flex items-center justify-end gap-1 ${
                  message.sender === "me"
                    ? "text-violet-200"
                    : "text-gray-600"
                }`}
              >
                <span className="text-[10px]">
                  {message.time}
                </span>

                {message.sender === "me" && (
                  <span className="text-[10px]">
                    {message.seen ? "✓✓" : "✓"}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        <div className="flex justify-start">
          <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.06] px-4 py-3">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-500" />

            <span
              className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-500"
              style={{ animationDelay: "100ms" }}
            />

            <span
              className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-500"
              style={{ animationDelay: "200ms" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
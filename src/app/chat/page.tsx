"use client";

import { FormEvent, useState } from "react";

type User = {
  id: number;
  name: string;
  message: string;
  time: string;
  online: boolean;
  unread?: number;
};

type Message = {
  id: number;
  sender: "me" | "other";
  text: string;
  time: string;
  seen?: boolean;
};

const users: User[] = [
  {
    id: 1,
    name: "Rahim Ahmed",
    message: "Hey! How are you?",
    time: "10:42 AM",
    online: true,
    unread: 2,
  },
  {
    id: 2,
    name: "Karim Hasan",
    message: "See you tomorrow!",
    time: "9:30 AM",
    online: true,
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    message: "Thank you 😊",
    time: "Yesterday",
    online: false,
  },
  {
    id: 4,
    name: "Sakib Khan",
    message: "Can you send me the file?",
    time: "Yesterday",
    online: false,
  },
];

const initialMessages: Message[] = [
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

export default function ChatPage() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage) return;

    const newMessage: Message = {
      id: Date.now(),
      sender: "me",
      text: trimmedMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      seen: false,
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
  };

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);

    // Mobile: hide sidebar after selecting a conversation
    setShowSidebar(false);
  };

  return (
    <main className="min-h-screen bg-[#080b1a] text-white">
      <div className="mx-auto flex h-screen max-w-[1600px] overflow-hidden border-x border-white/5 bg-[#0d1020]">
        {/* ================= SIDEBAR ================= */}
        <aside
          className={`
            ${
              showSidebar ? "flex" : "hidden"
            }
            w-full flex-col border-r border-white/10 bg-[#0b0e1c]
            md:flex md:w-[340px] md:min-w-[340px]
          `}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div>
              <h1 className="text-xl font-bold tracking-tight">
                Omni<span className="text-violet-400">Chat</span>
              </h1>

              <p className="mt-0.5 text-xs text-gray-500">
                Your conversations
              </p>
            </div>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-gray-400 transition hover:bg-white/10 hover:text-white"
              aria-label="Profile"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 20c.8-3.5 3.2-5.5 7-5.5s6.2 2 7 5.5" />
              </svg>
            </button>
          </div>

          {/* Search */}
          <div className="p-4">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
              <svg
                className="h-5 w-5 shrink-0 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4 4" />
              </svg>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search conversations..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
              />
            </div>
          </div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto px-2 pb-3">
            <p className="px-3 pb-2 text-xs font-medium uppercase tracking-wider text-gray-600">
              Messages
            </p>

            {filteredUsers.map((user) => (
              <button
                key={user.id}
                onClick={() => handleSelectUser(user)}
                className={`
                  mb-1 flex w-full items-center gap-3 rounded-xl p-3 text-left
                  transition
                  ${
                    selectedUser.id === user.id
                      ? "bg-violet-500/10"
                      : "hover:bg-white/[0.04]"
                  }
                `}
              >
                {/* Avatar */}
                <div className="relative shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-sm font-semibold">
                    {user.name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  {user.online && (
                    <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#0b0e1c] bg-emerald-400" />
                  )}
                </div>

                {/* User Info */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="truncate text-sm font-medium text-gray-100">
                      {user.name}
                    </h3>

                    <span className="shrink-0 text-[10px] text-gray-600">
                      {user.time}
                    </span>
                  </div>

                  <div className="mt-1 flex items-center justify-between gap-2">
                    <p className="truncate text-xs text-gray-500">
                      {user.message}
                    </p>

                    {user.unread && (
                      <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-violet-500 px-1.5 text-[10px] font-semibold">
                        {user.unread}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Current User */}
          <div className="border-t border-white/10 p-3">
            <div className="flex items-center gap-3 rounded-xl p-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-xs font-semibold">
                SA
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">
                  Md Salauddin
                </p>
                <p className="text-xs text-emerald-400">Online</p>
              </div>

              <button
                className="text-gray-500 transition hover:text-white"
                aria-label="More options"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="5" cy="12" r="1" />
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                </svg>
              </button>
            </div>
          </div>
        </aside>

        {/* ================= CHAT ================= */}
        <section
          className={`
            ${showSidebar ? "hidden md:flex" : "flex"}
            min-w-0 flex-1 flex-col bg-[#0d1020]
          `}
        >
          {/* Chat Header */}
          <header className="flex h-[72px] shrink-0 items-center gap-3 border-b border-white/10 px-4 sm:px-6">
            {/* Mobile Back */}
            <button
              onClick={() => setShowSidebar(true)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 hover:bg-white/5 hover:text-white md:hidden"
              aria-label="Back"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-sm font-semibold">
                {selectedUser.name
                  .split(" ")
                  .map((name) => name[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              {selectedUser.online && (
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0d1020] bg-emerald-400" />
              )}
            </div>

            {/* User */}
            <div className="min-w-0 flex-1">
              <h2 className="truncate text-sm font-semibold sm:text-base">
                {selectedUser.name}
              </h2>

              <p className="text-xs text-emerald-400">
                {selectedUser.online ? "Online" : "Offline"}
              </p>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-1">
              <button
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-white/5 hover:text-white"
                aria-label="Search messages"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="11" cy="11" r="6.5" />
                  <path d="m16 16 4 4" />
                </svg>
              </button>

              <button
                className="hidden h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-white/5 hover:text-white sm:flex"
                aria-label="More options"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="5" cy="12" r="1" />
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                </svg>
              </button>
            </div>
          </header>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-8">
            <div className="mx-auto flex max-w-3xl flex-col gap-3">
              {/* Date */}
              <div className="mb-3 flex justify-center">
                <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] text-gray-500">
                  Today
                </span>
              </div>

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "me"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`
                      max-w-[80%] sm:max-w-[65%]
                      ${
                        msg.sender === "me"
                          ? "rounded-2xl rounded-br-md bg-violet-600"
                          : "rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.06]"
                      }
                      px-4 py-2.5
                    `}
                  >
                    <p className="break-words text-sm leading-6 text-white">
                      {msg.text}
                    </p>

                    <div
                      className={`mt-1 flex items-center justify-end gap-1 ${
                        msg.sender === "me"
                          ? "text-violet-200"
                          : "text-gray-600"
                      }`}
                    >
                      <span className="text-[10px]">{msg.time}</span>

                      {msg.sender === "me" && (
                        <span className="text-[10px]">
                          {msg.seen ? "✓✓" : "✓"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
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

          {/* Message Input */}
          <div className="border-t border-white/10 bg-[#0b0e1c] p-3 sm:p-4">
            <form
              onSubmit={handleSendMessage}
              className="mx-auto flex max-w-3xl items-end gap-2"
            >
              {/* Attachment */}
              <button
                type="button"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-gray-500 transition hover:bg-white/5 hover:text-white"
                aria-label="Attach file"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="m21.4 11.6-8.7 8.7a6 6 0 0 1-8.5-8.5l9-9a4 4 0 0 1 5.7 5.7l-9 9a2 2 0 0 1-2.8-2.8l8.5-8.5" />
                </svg>
              </button>

              {/* Input */}
              <div className="flex min-h-11 flex-1 items-center rounded-xl border border-white/10 bg-white/[0.04] px-3">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write a message..."
                  className="w-full bg-transparent py-2 text-sm text-white outline-none placeholder:text-gray-600"
                />

                <button
                  type="button"
                  className="ml-2 hidden text-gray-500 transition hover:text-white sm:block"
                  aria-label="Emoji"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8.5 14.5s1.3 2 3.5 2 3.5-2 3.5-2" />
                    <path d="M9 9.5h.01M15 9.5h.01" />
                  </svg>
                </button>
              </div>

              {/* Send */}
              <button
                type="submit"
                disabled={!message.trim()}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
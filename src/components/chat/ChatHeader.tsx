"use client";

type ChatHeaderProps = {
  name: string;
  online: boolean;
  onBack: () =>void;
};

export default function ChatHeader({
  name,
  online,
  onBack,
}: ChatHeaderProps) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="flex h-[72px] shrink-0 items-center gap-3 border-b border-white/10 bg-[#0d1020] px-4 sm:px-6">
      
      {/* Mobile Back Button */}
      <button
        type="button"
        onClick={onBack}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-white/5 hover:text-white md:hidden"
        aria-label="Back to conversations"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            d="m15 18-6-6 6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Avatar */}
      <div className="relative shrink-0">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-sm font-semibold text-white">
          {initials}
        </div>

        {/* Online Indicator */}
        {online && (
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0d1020] bg-emerald-400" />
        )}
      </div>

      {/* User Information */}
      <div className="min-w-0 flex-1">
        <h2 className="truncate text-sm font-semibold text-white sm:text-base">
          {name}
        </h2>

        <p
          className={`text-xs ${
            online ? "text-emerald-400" : "text-gray-500"
          }`}
        >
          {online ? "Online" : "Offline"}
        </p>
      </div>

      {/* Search Button */}
      <button
        type="button"
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

          <path
            d="m16 16 4 4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* More Button */}
      <button
        type="button"
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
    </header>
  );
}
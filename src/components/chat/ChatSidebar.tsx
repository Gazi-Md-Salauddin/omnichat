"use client";

export default function ChatSidebar() {
  return (
    <aside className="flex h-full w-full flex-col border-r border-white/10 bg-[#0b0e1c] md:w-[340px] md:min-w-[340px]">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            Omni<span className="text-violet-400">Chat</span>
          </h1>

          <p className="mt-0.5 text-xs text-gray-500">
            Your conversations
          </p>
        </div>

        <button
          type="button"
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
            placeholder="Search conversations..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
          />

        </div>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto px-2 pb-3">

        <p className="px-3 pb-2 text-xs font-medium uppercase tracking-wider text-gray-600">
          Messages
        </p>

        {/* User 1 */}
        <button
          type="button"
          className="mb-1 flex w-full items-center gap-3 rounded-xl bg-violet-500/10 p-3 text-left transition hover:bg-violet-500/15"
        >

          {/* Avatar */}
          <div className="relative shrink-0">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-sm font-semibold">
              RA
            </div>

            {/* Online */}
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#0b0e1c] bg-emerald-400" />

          </div>

          {/* User info */}
          <div className="min-w-0 flex-1">

            <div className="flex items-center justify-between gap-2">

              <h3 className="truncate text-sm font-medium text-gray-100">
                Rahim Ahmed
              </h3>

              <span className="shrink-0 text-[10px] text-gray-600">
                10:42 AM
              </span>

            </div>

            <div className="mt-1 flex items-center justify-between gap-2">

              <p className="truncate text-xs text-gray-500">
                Hey! How are you?
              </p>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-violet-500 px-1.5 text-[10px] font-semibold">
                2
              </span>

            </div>

          </div>

        </button>

        {/* User 2 */}
        <button
          type="button"
          className="mb-1 flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-white/[0.04]"
        >

          <div className="relative shrink-0">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-sm font-semibold">
              KH
            </div>

            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#0b0e1c] bg-emerald-400" />

          </div>

          <div className="min-w-0 flex-1">

            <div className="flex items-center justify-between gap-2">

              <h3 className="truncate text-sm font-medium text-gray-100">
                Karim Hasan
              </h3>

              <span className="shrink-0 text-[10px] text-gray-600">
                9:30 AM
              </span>

            </div>

            <p className="mt-1 truncate text-xs text-gray-500">
              See you tomorrow!
            </p>

          </div>

        </button>

        {/* User 3 */}
        <button
          type="button"
          className="mb-1 flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-white/[0.04]"
        >

          <div className="relative shrink-0">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-sm font-semibold">
              NJ
            </div>

          </div>

          <div className="min-w-0 flex-1">

            <div className="flex items-center justify-between gap-2">

              <h3 className="truncate text-sm font-medium text-gray-100">
                Nusrat Jahan
              </h3>

              <span className="shrink-0 text-[10px] text-gray-600">
                Yesterday
              </span>

            </div>

            <p className="mt-1 truncate text-xs text-gray-500">
              Thank you 😊
            </p>

          </div>

        </button>

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

            <p className="text-xs text-emerald-400">
              Online
            </p>

          </div>

          <button
            type="button"
            className="text-gray-500 transition hover:text-white"
            aria-label="More options"
          >
            •••
          </button>

        </div>

      </div>

    </aside>
  );
}
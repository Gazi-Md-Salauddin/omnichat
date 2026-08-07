"use client"
import {useState} from 'react'

import ChatSidebar from './ChatSidebar'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'

export type ChatUser = {
  id: number;
  name: string;
  online: boolean;
};

const users: ChatUser[] = [
  {
    id: 1,
    name: "Rahim Ahmed",
    online: true,
  },
  {
    id: 2,
    name: "Karim Hasan",
    online: true,
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    online: false,
  },
]

const ChatLayout = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const selectedUser = users.find((user) => user.id === selectedUserId) ?? null;

  const handleSelectUser = (userId: number) => {
    setSelectedUserId(userId);
  };

  const handleBack = () => {
    setSelectedUserId(null);
  };
  
  return (
    <main className="flex h-screen overflow-hidden bg-[#0d1020]">
      {/* Sidebar */}
      <div
        className={`${
          selectedUserId !== null ? "hidden md:flex" : "flex"
        } h-full w-full md:w-[340px] md:min-w-[340px]`}
      >
        <ChatSidebar
          users={users}
          selectedUserId={selectedUserId}
          onSelectUser={handleSelectUser}
        />
      </div>

      {/* Chat Area */}
      <section
        className={`${
          selectedUserId !== null ? "flex" : "hidden md:flex"
        } min-w-0 flex-1 flex-col`}
      >
        {selectedUser ? (
          <>
            <ChatHeader
              name={selectedUser.name}
              online={selectedUser.online}
              onBack={handleBack}
            />

            <MessageList />
          </>
        ) : (
          <div className="hidden flex-1 items-center justify-center md:flex">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-2xl">
                💬
              </div>

              <h2 className="text-lg font-semibold text-white">
                Welcome to OmniChat
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Select a conversation to start chatting
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

export default ChatLayout
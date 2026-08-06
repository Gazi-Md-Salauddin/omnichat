import Image from "next/image";
import ChatSidebar from '@/components/chat/ChatSidebar'
import ChatHeader from '@/components/chat/ChatHeader'

export default function Home() {
  return (
    <div>
      <ChatSidebar/>
      <section className="flex flex-1 flex-col">
        <ChatHeader
          name="Rahim Ahmed"
          online={true}
          
        />
      </section>
    </div>
  );
}

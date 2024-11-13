"use client";

import React, { useState } from "react";
import { Message, useChat } from "ai/react";
import { Messages } from "./Messages";
import { ChatInput } from "./ChatInput";
import { Sidebar } from "./sidebar";

export const ChatWrapper = ({
  sessionId,
  initialMessages,
}: {
  sessionId: string;
  initialMessages: Message[];
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const { messages, handleInputChange, handleSubmit, input, setInput } = useChat({
    api: "/api/chat-stream",
    body: { sessionId },
    initialMessages,
  });

  return (
    <div className="relative min-h-full bg-white flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Chat Area */}
      <div
        className={`flex-1 bg-zinc-900 flex flex-col justify-between transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"
          }`}
      >
        <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
          <Messages messages={messages} />
        </div>

        <ChatInput
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          setInput={setInput}
        />
      </div>

      {/* Nút Open */}
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 bg-zinc-700 text-zinc-200 rounded-full p-2 hover:bg-zinc-600 z-50"
        >
          Open
        </button>
      )}
    </div>
  );
};

"use client";

import React, { useState } from "react";
import { Message, useChat } from "ai/react";
import { Messages } from "./Messages";
import { ChatInput } from "./ChatInput";
import { Sidebar } from "./sidebar";
import { LayoutOutlined } from "@ant-design/icons";

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
    <div className="relative min-h-screen flex bg-slate-800 text-zinc-200">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Chat Area */}
      <div
        className={`flex-1 flex flex-col justify-between transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"
          }`}
      >
        {/* Chat Messages */}
        <div className="flex-1">
          <Messages messages={messages} />
        </div>

        {/* Chat Input */}
        <ChatInput
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          setInput={setInput}
        />
      </div>

      {/* Toggle Sidebar Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-full bg-zinc-700 hover:bg-zinc-600 text-white shadow"
        >
          <LayoutOutlined className="text-xl" />
        </button>
      </div>
    </div>
  );
};

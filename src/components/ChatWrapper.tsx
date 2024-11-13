"use client";

import React, { useState, useEffect } from "react";
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
  const { messages, handleInputChange, handleSubmit, input, setInput, isLoading } = useChat({
    api: "/api/chat-stream",
    body: { sessionId },
    initialMessages,
  });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="relative min-h-screen flex bg-slate-50 text-slate-950">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Chat Area */}
      <div
        className={`flex-1 flex flex-col justify-between transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"
          }`}
      >
        {/* Chat Messages */}
        <Messages messages={messages} />

        {/* Display loading spinner or pulse effect while waiting for response */}
        {isLoading && (
          <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mt-4">
            <div className="animate-pulse flex space-x-4">
              {/* Avatar placeholder */}
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>

              <div className="flex-1 space-y-6 py-1">
                {/* Text placeholder */}
                <div className="flex items-center space-x-2">
                  {/* TechX Support text */}
                  <span className="text-sm font-semibold text-black dark:text-white">TechX Support</span>
                  {/* Loading indicator */}
                  <div className="rounded-full bg-slate-200 h-2 w-2 animate-pulse"></div>
                </div>

                {/* Placeholder text */}
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    {/* Empty grid placeholder */}
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        )}

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
          className="p-2 rounded-full bg-zinc-200 hover:bg-zinc-100 text-black shadow"
        >
          <LayoutOutlined className="text-xl" />
        </button>
      </div>
    </div>
  );
};

"use client";

import { useEffect, useState } from "react";
import { Message } from "./Message"; // Giả sử bạn đã có Message component

interface ChatHistoryMessage {
    content: string;
    isUserMessage: boolean;
    timestamp: string;
}

export const ChatHistory = () => {
    const [messages, setMessages] = useState<ChatHistoryMessage[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Giả sử API '/api/chat-history' trả về danh sách các tin nhắn
        const fetchChatHistory = async () => {
            try {
                const response = await fetch("/api/chat-history/");
                const data = await response.json();
                setMessages(data.messages);
            } catch (error) {
                console.error("Failed to fetch chat history:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchChatHistory();
    }, []);

    return (
        <div className="flex flex-col max-h-screen overflow-y-auto p-6 bg-slate-50">
            <h2 className="text-2xl font-semibold text-black mb-4">Chat History</h2>

            {/* Nếu đang tải dữ liệu */}
            {isLoading ? (
                <div className="flex justify-center items-center text-gray-500">Loading...</div>
            ) : (
                // Hiển thị tin nhắn nếu đã tải thành công
                <div className="space-y-4">
                    {messages.length > 0 ? (
                        messages.map((message, index) => (
                            <Message
                                key={index}
                                content={message.content}
                                isUserMessage={message.isUserMessage}
                            />
                        ))
                    ) : (
                        <div className="text-center text-gray-400">No chat history available.</div>
                    )}
                </div>
            )}
        </div>
    );
};

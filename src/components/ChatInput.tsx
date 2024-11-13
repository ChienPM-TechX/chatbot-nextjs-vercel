"use client";

import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { Send, Paperclip } from "lucide-react"; // Import biểu tượng Paperclip
import { type useChat } from "ai/react";

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"];
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"];
type SetInput = ReturnType<typeof useChat>["setInput"];

interface ChatInputProps {
  input: string;
  handleInputChange: HandleInputChange;
  handleSubmit: HandleSubmit;
  setInput: SetInput;
}

export const ChatInput = ({ handleInputChange, handleSubmit, input, setInput }: ChatInputProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Xử lý khi chọn file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // Xóa file đã chọn
  const handleClearFile = () => setSelectedFile(null);

  // Gửi tin nhắn kèm file (nếu có)
  const handleSubmitWithFile = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("message", input);

      try {
        await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
      } catch (error) {
        console.error("Failed to upload file:", error);
      }
    }

    handleSubmit();
    handleClearFile(); // Xóa file sau khi gửi
  };

  return (
    <div className="z-10 w-full p-3 bg-zinc-900">
      <div className="mx-auto flex flex-col gap-3 items-center max-w-4xl">
        {/* Input và Nút Gửi */}
        <div className="flex flex-row items-center gap-3 w-full">
          {/* Attachment Button */}
          <label
            htmlFor="file-upload"
            className="cursor-pointer p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center"
          >
            <Paperclip className="h-5 w-5" />
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />

          {/* Input box */}
          <Input
            value={input}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmitWithFile(); // Gửi tin nhắn kèm file
                setInput("");
              }
            }}
            placeholder="Type your message..."
            className="flex-1 rounded-lg text-base text-white placeholder-zinc-500 px-4 py-2 border border-zinc-700 focus:ring-2 focus:ring-zinc-500 focus:outline-none"
          />

          {/* Send Button */}
          <Button
            size="lg"
            type="submit"
            onClick={() => {
              handleSubmitWithFile();
              setInput("");
            }}
            className="flex items-center justify-center rounded-lg bg-blue-600 text-white px-4 py-2 hover:bg-blue-500"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>

        {/* Hiển Thị File Được Chọn */}
        {selectedFile && (
          <div className="flex items-center gap-2 w-full">
            <span className="text-sm text-zinc-300 truncate">{selectedFile.name}</span>
            <button
              onClick={handleClearFile}
              className="text-red-500 hover:text-red-400 text-sm"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

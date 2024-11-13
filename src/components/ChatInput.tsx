"use client";

import { Button, Input } from "@nextui-org/react";
import { Send } from "lucide-react";
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
  return (
    <div className="z-10  w-full p-3">
      <div className="mx-auto flex flex-row gap-3 items-center max-w-4xl">
        {/* Input box */}
        <Input
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
              setInput("");
            }
          }}
          placeholder="Type your message..."
          className="flex-1 rounded-lg  text-base text-white placeholder-zinc-500 px-4 py-2 border border-zinc-700 focus:ring-2 focus:ring-zinc-500 focus:outline-none"
        />

        {/* Send Button */}
        <Button
          size="lg"
          type="submit"
          onClick={handleSubmit}
          className="flex items-center justify-center rounded-lg bg-blue-600 text-white px-4 py-2 hover:bg-blue-500"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

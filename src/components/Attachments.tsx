"use client";

import React, { useState } from "react";
import { Paperclip } from "lucide-react"; // Biểu tượng đính kèm từ thư viện lucide-react

export const Attachments = ({
    onFileSelect,
}: {
    onFileSelect: (file: File) => void;
}) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            onFileSelect(file);
        }
    };

    return (
        <div className="flex items-center space-x-2">
            {/* Biểu tượng đính kèm */}
            <label
                htmlFor="file-upload"
                className="cursor-pointer p-2 rounded-full bg-zinc-700 hover:bg-zinc-600 text-white"
            >
                <Paperclip className="text-lg" />
            </label>

            {/* Input ẩn để chọn file */}
            <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
            />

            {/* Hiển thị tên file được chọn */}
            {selectedFile && (
                <span className="text-sm text-zinc-400">{selectedFile.name}</span>
            )}
        </div>
    );
};

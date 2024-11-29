import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    // Giả sử bạn lưu trữ tin nhắn trong Redis hoặc cơ sở dữ liệu khác
    const chatHistory = [
        { content: "Hello!", isUserMessage: true, timestamp: new Date().toISOString() },
        { content: "Hi, how can I help you?", isUserMessage: false, timestamp: new Date().toISOString() },
        // Thêm các tin nhắn lịch sử ở đây
    ];

    return NextResponse.json({ messages: chatHistory });
}

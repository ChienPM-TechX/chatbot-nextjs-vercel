"use client";

import React from "react";

export const Sidebar = ({
    isOpen,
    toggleSidebar,
}: {
    isOpen: boolean;
    toggleSidebar: () => void;
}) => {
    const items = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "Chat History", href: "/chat-history" },
        { id: 3, label: "Settings", href: "/settings" },
        { id: 4, label: "Help", href: "/help" },
    ];

    console.log("Sidebar isOpen:", isOpen); // Debugging

    return (
        <div
            className={`fixed top-0 left-0 h-full bg-zinc-800 text-zinc-200 p-4 border-r border-zinc-700 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            style={{ width: "16rem", zIndex: 50 }}
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Menu</h2>
                <button
                    onClick={toggleSidebar}
                    className="bg-zinc-700 text-zinc-200 rounded-full p-2 hover:bg-zinc-600"
                >
                    Hide
                </button>
            </div>
            <ul className="space-y-2">
                {items.map((item) => (
                    <li key={item.id}>
                        <a
                            href={item.href}
                            className="block px-3 py-2 rounded-md hover:bg-zinc-700 transition"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

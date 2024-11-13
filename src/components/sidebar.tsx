"use client";

import React from "react";

export const Sidebar = ({
    isOpen,
}: {
    isOpen: boolean;
}) => {
    const items = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "Chat History", href: "/chat-history" },
        { id: 3, label: "Settings", href: "/settings" },
        { id: 4, label: "Help", href: "/help" },
    ];

    return (
        <div
            className={`fixed top-0 left-0 h-full bg-zinc-900 text-zinc-200 p-4 border-r border-zinc-700 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            style={{ width: "16rem", zIndex: 50 }}
        >
            {/* <h2 className="text-xl font-semibold mb-4 text-right">Menu</h2> */}
            <ul className="space-y-2 mt-10">
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

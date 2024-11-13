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
            className={`fixed top-0 left-0 h-full bg-gray-50 text-black p-7 border-r border-slate-100 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            style={{ width: "15rem", zIndex: 50 }}
        >
            {/* <h2 className="text-xl font-semibold mb-4 text-right">Menu</h2> */}
            <ul className="space-y-2 mt-10">
                {items.map((item) => (
                    <li key={item.id}>
                        <a
                            href={item.href}
                            className="block px-4 py-2 rounded-full hover:bg-zinc-200 transition"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

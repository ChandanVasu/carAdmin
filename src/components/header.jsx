// components/Header.js
"use client"

import ThemeMode from "@/components/block/themeMode"

export default function Header() {
  return (
    <header className="bg-white p-4 dark:bg-black sticky top-0 z-20 dark:text-white text-black main-head">
      <div className="flex justify-between">
      <h1 className=" text-2xl font-bold">My Website</h1>
      <div>
      <ThemeMode></ThemeMode>
      </div>
      </div>
      
    </header>
  );
}

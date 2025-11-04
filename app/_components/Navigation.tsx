'use client';

import Link from "next/link";

export default function Navigation() {
    return <header className="flex flex-row w-full flex-col items-start justify-between py-4 mx-auto block max-w-3xl ">
          <nav className="flex flex-row gap-2">
            <Link href="/">Home</Link>
            |
            <Link  href="/dashboard">Dashboard</Link>
          </nav>
        </header>
}
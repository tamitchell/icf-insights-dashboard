'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
     const [showWarning, setShowWarning] = useState(true);
  useEffect(() => {
    if(!process.env.OPENAI_API_KEY) {
      setShowWarning(true);
    } else {
      setShowWarning(false)
    }
  }, [])
    return <header className="flex flex-row w-full flex-col items-start justify-between py-4 mx-auto block max-w-3xl ">
          <nav className="flex flex-row gap-2">
            <Link href="/">Home</Link>
            |
            <Link  href="/dashboard">Dashboard</Link>
          </nav>
          {showWarning && <span className="bg-yellow-400 rounded-md text-black p-1">Warning: Env not found Responses from API are mocked.</span> }
        </header>
}
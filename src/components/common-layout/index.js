"use client";

import UserState from "@/context";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { Zap, Heart, Database, Code2 } from "lucide-react";

export default function CommonLayout({ children }) {
  return (
    <UserState>
      <div className="min-h-screen flex flex-col bg-slate-50/60 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="border-t border-slate-200/80 bg-white/70 backdrop-blur-sm py-8 mt-16 text-center text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700">ActionHub</span>
              <span>— Modern Next.js 14 Server Actions Architecture</span>
            </div>
            <div className="flex items-center gap-4 text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-emerald-600" />
                MongoDB Atlas
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-blue-600" />
                Tailwind CSS
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                Server Actions
              </span>
            </div>
          </div>
        </footer>
      </div>
    </UserState>
  );
}

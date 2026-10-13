import Link from "next/link";
import {
  Users,
  Zap,
  Server,
  ArrowRight,
  Database,
  RefreshCw,
  ShieldCheck,
  Code2,
  Sparkles,
  Layers,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12 py-4">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-blue-50/80 via-white to-slate-50/40 border border-blue-100/80 p-8 sm:p-12 lg:p-16 text-center shadow-sm">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-blue-700 text-xs font-semibold mb-6 shadow-xs border border-blue-200">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" style={{ animationDuration: '4s' }} />
          <span>Next.js 14 App Router &amp; Server Actions</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none">
          Full-Stack Mutations,{" "}
          <span className="gradient-text">Zero Boilerplate</span>
        </h1>

        <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Manage your database directly from React components. Experience seamless 
          MongoDB integration, type-safe server functions, and automatic cache 
          revalidation without writing repetitive REST API routes.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/user-management"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Users className="w-4 h-4" />
            <span>Launch User Management</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/theory/server-page-example"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-medium border border-slate-200 shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Server className="w-4 h-4 text-slate-500" />
            <span>Server Actions Demo</span>
          </Link>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-slate-900">0</div>
            <div className="text-xs text-slate-500 mt-1">API Routes Required</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">100%</div>
            <div className="text-xs text-slate-500 mt-1">Server Direct Execution</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">Mongoose</div>
            <div className="text-xs text-slate-500 mt-1">Live MongoDB Atlas</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-600">revalidate</div>
            <div className="text-xs text-slate-500 mt-1">Path Cache Sync</div>
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Why Server Actions?
          </h2>
          <p className="text-sm text-slate-500 mt-1.5">
            Key capabilities unlocked by Next.js 14 server functions in this application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 text-base">Direct Mutations</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Call server functions directly from client buttons and form actions without manual fetch requests or URL endpoints.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 text-base">Instant Cache Revalidation</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Changes trigger automatic <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded text-indigo-700">revalidatePath()</code>, ensuring user cards update instantly with fresh data.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 text-base">Secure DB Persistence</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Database connection and Mongoose queries run strictly on the Node.js runtime, keeping credentials and queries shielded.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Shortcuts */}
      <section className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Explore App Modules</h3>
            <p className="text-xs text-slate-500 mt-0.5">Quickly jump to functional examples in this repo</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/user-management"
            className="group p-5 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-lg bg-blue-100 text-blue-700">
                <Users className="w-5 h-5" />
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                User Management
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Full CRUD application with live MongoDB persistence.
              </p>
            </div>
          </Link>

          <Link
            href="/theory/client-page-example"
            className="group p-5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/30 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-lg bg-indigo-100 text-indigo-700">
                <Zap className="w-5 h-5" />
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                Client Page Actions
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Invoking server actions from <code className="text-[11px]">&quot;use client&quot;</code> components.
              </p>
            </div>
          </Link>

          <Link
            href="/theory/server-page-example"
            className="group p-5 rounded-xl border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-700">
                <Server className="w-5 h-5" />
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                Server Page Actions
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Direct async data fetching in React Server Components.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

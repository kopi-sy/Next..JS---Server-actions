import { fetchListOfProducts } from "@/actions";
import Link from "next/link";
import { Server, ArrowLeft, ShoppingBag, Star, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Server Component Action | Next.js Server Actions",
  description: "Server Actions invoked directly inside React Server Components",
};

async function ServerActionsExample() {
  const products = await fetchListOfProducts();

  return (
    <div className="space-y-8 py-2">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-xs font-semibold text-slate-500 hover:text-blue-600 inline-flex items-center gap-1 mb-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Server className="w-5 h-5" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Server Component Action
            </h1>
          </div>
          <p className="text-sm text-slate-500">
            Direct asynchronous Server Action invocation within a React Server Component (RSC).
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold self-start sm:self-auto">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Zero Client JavaScript Fetch</span>
        </div>
      </div>

      {/* Product Grid */}
      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium capitalize">
                    {item.category || "Product"}
                  </span>
                  {item.rating && (
                    <span className="flex items-center gap-1 font-semibold text-amber-600">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      {item.rating}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-slate-900 text-sm line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-base font-extrabold text-slate-900">
                  ${item.price}
                </span>
                <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  RSC Streamed
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl bg-white border border-slate-200 text-slate-500">
          <ShoppingBag className="w-8 h-8 mx-auto text-slate-400 mb-2" />
          <p className="text-sm font-medium">No products found</p>
        </div>
      )}
    </div>
  );
}

export default ServerActionsExample;

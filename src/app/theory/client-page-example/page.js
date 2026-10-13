"use client";

import { fetchListOfProducts } from "@/actions";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Zap, Loader2, ArrowLeft, RefreshCw, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

function ClientPageExample() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getListOfProducts() {
    setLoading(true);
    const data = await fetchListOfProducts();
    if (data) {
      setProducts(data);
    }
    setLoading(false);
  }

  useEffect(() => {
    getListOfProducts();
  }, []);

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
            <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Client Component Action
            </h1>
          </div>
          <p className="text-sm text-slate-500">
            Fetching product data via Server Action triggered on client mount.
          </p>
        </div>

        <Button
          onClick={getListOfProducts}
          disabled={loading}
          variant="outline"
          className="rounded-xl border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50/50 text-xs font-semibold gap-2 self-start sm:self-auto"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-indigo-600" : ""}`} />
          <span>Refresh Data</span>
        </Button>
      </div>

      {/* Content */}
      {loading ? (
        <div className="p-16 text-center rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col items-center justify-center space-y-3">
          <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
          <h3 className="text-base font-semibold text-slate-800">
            Invoking Server Action...
          </h3>
          <p className="text-xs text-slate-500">
            Executing server function and streaming response to client component
          </p>
        </div>
      ) : products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all flex flex-col justify-between"
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
                  Server Synced
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

export default ClientPageExample;

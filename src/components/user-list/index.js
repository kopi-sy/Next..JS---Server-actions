"use client";

import { useState } from "react";
import SingleUserCard from "@/components/single-user-card";
import AddNewUser from "@/components/add-new-user";
import { Search, Users, UserX, Sparkles, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function UserList({ initialUsers = [] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = initialUsers.filter((user) => {
    const term = searchTerm.toLowerCase();
    const fullName = `${user.firstName || ""} ${user.lastName || ""}`.toLowerCase();
    const email = (user.email || "").toLowerCase();
    const address = (user.address || "").toLowerCase();
    return fullName.includes(term) || email.includes(term) || address.includes(term);
  });

  return (
    <div className="space-y-8">
      {/* Top Header Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              User Directory
            </h1>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
              {initialUsers.length} {initialUsers.length === 1 ? "Member" : "Members"}
            </span>
          </div>
          <p className="text-sm text-slate-500">
            Real-time user CRUD powered by Next.js Server Actions &amp; MongoDB Atlas.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <AddNewUser />
        </div>
      </div>

      {/* Search & Filter Bar */}
      {initialUsers.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <Input
              type="text"
              placeholder="Search by name, email, or address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-xl border-slate-200 bg-white text-sm shadow-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-2 self-start sm:self-auto">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span>
              Showing <strong className="text-slate-800">{filteredUsers.length}</strong> of{" "}
              {initialUsers.length} users
            </span>
          </div>
        </div>
      )}

      {/* User Grid or Empty States */}
      {initialUsers.length === 0 ? (
        /* Empty Database State */
        <div className="p-12 text-center rounded-3xl bg-white border border-dashed border-slate-300 shadow-xs space-y-4 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto shadow-inner">
            <Users className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">No users found in database</h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto">
              Get started by creating your first user profile. All changes persist automatically in MongoDB.
            </p>
          </div>
          <div className="pt-2 flex justify-center">
            <AddNewUser />
          </div>
        </div>
      ) : filteredUsers.length === 0 ? (
        /* Search Query No Match State */
        <div className="p-12 text-center rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <UserX className="w-6 h-6" />
          </div>
          <h3 className="text-base font-semibold text-slate-800">
            No matching users found
          </h3>
          <p className="text-xs text-slate-500">
            No members matched your search for &quot;{searchTerm}&quot;. Try adjusting your keywords.
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="text-xs text-blue-600 hover:underline font-medium pt-1"
          >
            Clear Search
          </button>
        </div>
      ) : (
        /* Grid of Users */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((userItem) => (
            <SingleUserCard key={userItem._id} user={userItem} />
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { deleteUserAction } from "@/actions";
import { useContext, useState } from "react";
import { UserContext } from "@/context";
import { Mail, MapPin, Pencil, Trash2, Loader2 } from "lucide-react";

function SingleUserCard({ user }) {
  const { setOpenPopup, setAddNewUserFormData, setCurrentEditedID } =
    useContext(UserContext);

  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete(getCurrentUserID) {
    try {
      setIsDeleting(true);
      const result = await deleteUserAction(getCurrentUserID, "/user-management");
      console.log(result);
    } catch (error) {
      console.error(error);
      setIsDeleting(false);
    }
  }

  function handleEdit(getCurrentUser) {
    setOpenPopup(true);
    setAddNewUserFormData({
      firstName: getCurrentUser?.firstName || "",
      lastName: getCurrentUser?.lastName || "",
      email: getCurrentUser?.email || "",
      address: getCurrentUser?.address || "",
    });
    setCurrentEditedID(getCurrentUser?._id);
  }

  // Generate initials for avatar
  const initials = `${user?.firstName?.[0] || ""}${user?.lastName?.[0] || ""}`.toUpperCase() || "U";

  // Pick deterministic avatar gradient
  const avatarColors = [
    "from-blue-500 to-indigo-600",
    "from-violet-500 to-purple-600",
    "from-emerald-500 to-teal-600",
    "from-amber-500 to-orange-600",
    "from-rose-500 to-pink-600",
  ];
  const charCode = (user?.firstName?.charCodeAt(0) || 0) + (user?.lastName?.charCodeAt(0) || 0);
  const bgGradient = avatarColors[charCode % avatarColors.length];

  return (
    <Card className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white transition-all duration-300 hover:shadow-lg hover:border-blue-200 flex flex-col justify-between">
      {/* Top Accent Line */}
      <div className={`h-1 w-full bg-gradient-to-r ${bgGradient}`} />

      <div>
        <CardHeader className="p-5 pb-3">
          <div className="flex items-start gap-3.5">
            {/* Avatar */}
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${bgGradient} flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0`}
            >
              {initials}
            </div>

            {/* Name & Status */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <h3 className="font-bold text-slate-900 text-base truncate group-hover:text-blue-600 transition-colors">
                  {user?.firstName} {user?.lastName}
                </h3>
              </div>
              <a
                href={`mailto:${user?.email}`}
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 transition-colors truncate mt-1"
                title={user?.email}
              >
                <Mail className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                <span className="truncate">{user?.email}</span>
              </a>
            </div>
          </div>
        </CardHeader>

        <CardContent className="px-5 py-2">
          {/* Address Box */}
          <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50/80 border border-slate-100 text-xs text-slate-600">
            <MapPin className="w-4 h-4 shrink-0 text-slate-400 mt-0.5" />
            <span className="line-clamp-2 leading-relaxed">
              {user?.address || "No address provided"}
            </span>
          </div>
        </CardContent>
      </div>

      <CardFooter className="px-5 py-3.5 bg-slate-50/40 border-t border-slate-100 flex items-center justify-between gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleEdit(user)}
          disabled={isDeleting}
          className="flex-1 rounded-lg border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50 text-xs font-semibold gap-1.5 h-8.5"
        >
          <Pencil className="w-3.5 h-3.5" />
          <span>Edit</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleDelete(user?._id)}
          disabled={isDeleting}
          className="flex-1 rounded-lg text-slate-600 hover:text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-200 text-xs font-semibold gap-1.5 h-8.5 transition-colors"
        >
          {isDeleting ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin text-rose-500" />
              <span className="text-rose-500">Deleting...</span>
            </>
          ) : (
            <>
              <Trash2 className="w-3.5 h-3.5" />
              <span>Delete</span>
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default SingleUserCard;

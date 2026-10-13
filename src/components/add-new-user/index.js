"use client";

import { addNewUserAction, editUserAction } from "@/actions";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addNewUserFormControls, addNewUserFormInitialState } from "@/utils";
import { useContext, useState } from "react";
import { UserContext } from "@/context";
import { UserPlus, UserCheck, Loader2, Mail, MapPin, User as UserIcon, X } from "lucide-react";

function AddNewUser() {
  const {
    openPopup,
    setOpenPopup,
    addNewUserFormData,
    setAddNewUserFormData,
    currentEditedID,
    setCurrentEditedID,
  } = useContext(UserContext);

  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSaveButtonValid() {
    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key] && addNewUserFormData[key].trim() !== ""
    );
  }

  function handleClose() {
    setOpenPopup(false);
    setAddNewUserFormData(addNewUserFormInitialState);
    setCurrentEditedID(null);
  }

  async function handleAddNewUserAction() {
    try {
      setIsSubmitting(true);
      const result =
        currentEditedID !== null
          ? await editUserAction(
              currentEditedID,
              addNewUserFormData,
              "/user-management"
            )
          : await addNewUserAction(addNewUserFormData, "/user-management");

      console.log(result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      handleClose();
    }
  }

  const isEditing = currentEditedID !== null;

  const getFieldIcon = (name) => {
    switch (name) {
      case "email":
        return <Mail className="w-4 h-4 text-slate-400" />;
      case "address":
        return <MapPin className="w-4 h-4 text-slate-400" />;
      default:
        return <UserIcon className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <div>
      <Button
        onClick={() => setOpenPopup(true)}
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md shadow-blue-500/20 px-4 py-2 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
      >
        <UserPlus className="w-4 h-4" />
        <span>Add New User</span>
      </Button>

      <Dialog open={openPopup} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-[480px] p-6 rounded-2xl bg-white border border-slate-200 shadow-xl">
          <DialogHeader className="space-y-1.5 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isEditing
                    ? "bg-amber-100 text-amber-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {isEditing ? (
                  <UserCheck className="w-5 h-5" />
                ) : (
                  <UserPlus className="w-5 h-5" />
                )}
              </div>
              <div>
                <DialogTitle className="text-lg font-bold text-slate-900">
                  {isEditing ? "Edit User Profile" : "Register New User"}
                </DialogTitle>
                <DialogDescription className="text-xs text-slate-500">
                  {isEditing
                    ? "Update the user's information and sync to MongoDB."
                    : "Fill in the details below to add a new user to the system."}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <form action={handleAddNewUserAction} className="space-y-4 pt-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {addNewUserFormControls.map((controlItem) => {
                const isFullWidth =
                  controlItem.name === "email" || controlItem.name === "address";

                return (
                  <div
                    key={controlItem.name}
                    className={`space-y-1.5 ${isFullWidth ? "sm:col-span-2" : ""}`}
                  >
                    <Label
                      htmlFor={controlItem.name}
                      className="text-xs font-semibold text-slate-700 flex items-center gap-1.5"
                    >
                      {getFieldIcon(controlItem.name)}
                      {controlItem.label}
                    </Label>
                    <Input
                      id={controlItem.name}
                      name={controlItem.name}
                      placeholder={controlItem.placeholder}
                      type={controlItem.type}
                      value={addNewUserFormData[controlItem.name] || ""}
                      onChange={(event) =>
                        setAddNewUserFormData({
                          ...addNewUserFormData,
                          [controlItem.name]: event.target.value,
                        })
                      }
                      className="rounded-lg border-slate-200 bg-slate-50/50 focus:bg-white text-sm transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                );
              })}
            </div>

            <DialogFooter className="pt-4 border-t border-slate-100 sm:flex-row gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isSubmitting}
                className="rounded-xl border-slate-200 text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!handleSaveButtonValid() || isSubmitting}
                className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm transition-all disabled:opacity-50 inline-flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Saving...</span>
                  </>
                ) : (
                  <span>{isEditing ? "Save Changes" : "Create User"}</span>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewUser;

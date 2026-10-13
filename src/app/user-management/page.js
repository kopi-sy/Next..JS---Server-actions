import { fetchUsersAction } from "@/actions";
import UserList from "@/components/user-list";

export const metadata = {
  title: "User Directory | Next.js Server Actions",
  description: "Manage users with full CRUD powered by Next.js Server Actions and MongoDB",
};

async function UserManagement() {
  const getListOfUsers = await fetchUsersAction();

  return (
    <div className="py-2">
      <UserList initialUsers={getListOfUsers?.data || []} />
    </div>
  );
}

export default UserManagement;

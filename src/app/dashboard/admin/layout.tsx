import Header from "@/components/dashboard/header/header";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Block non admins accessing the admin dashboard
  const user = await currentUser();
  if (!user || user?.privateMetadata.role !== "ADMIN") {
    redirect("/");
  }
  return (
    <div className="w-full h-full">
      {/* Sidebar */}
      <div className="w-full ml-[300px]">
        {/* Header */}
        <Header />
        <div className="w-full mt-[75px] p-4">{children}</div>
      </div>
    </div>
  );
}

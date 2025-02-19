import { DashboardSidebarMenuInterface } from "@/lib/types";

export default function SidebarNavAdmin({
  menuLinks,
}: {
  menuLinks: DashboardSidebarMenuInterface[];
}) {
  return <div>{menuLinks.map((a) => a.icon)}</div>;
}

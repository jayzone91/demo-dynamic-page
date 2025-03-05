import { Outlet } from "react-router";
import { Header } from "./components/header";

export function RootLayout() {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-[100vh]">
      <Header />
      <Outlet />
    </div>
  );
}

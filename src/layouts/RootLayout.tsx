import { Outlet } from "react-router";
import Nav from "../components/Root/Nav";
import HeaderIcon from "../components/HeaderIcon";

export default function RootLayout() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden mx-auto">
      {/* Header */}
      <HeaderIcon />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar">
        <Outlet />
      </main>
      <Nav />
    </div>
  );
}

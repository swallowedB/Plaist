import { Outlet } from "react-router";
import Nav from "../components/Root/Nav";
import { useAuthStore } from "../stores/authStore";

export default function RootLayout() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <div className="flex flex-col w-screen h-screen bg-white">
      <main className="flex-1 mx-auto overflow-y-scroll">
        <Outlet />
      </main>
      <Nav />
    </div>
  );
}

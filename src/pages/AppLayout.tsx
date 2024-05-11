import { Outlet } from "react-router";
import Header from "../components/Header";

function AppLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;

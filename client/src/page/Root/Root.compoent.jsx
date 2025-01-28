import { Outlet } from "react-router";
import { Header } from "../../components/header/header";

export function RootComponent() {
  return (
    <div className="m-auto max-w-[1800px]">
      <Header />
      <div className="px-8">
        <Outlet />
      </div>
    </div>
  );
}

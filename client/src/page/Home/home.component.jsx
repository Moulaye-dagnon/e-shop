import { useEffect } from "react";
import { DirectoryMenu } from "../../components/menu-directory/directory";
import { useSelector } from "react-redux";

export function HomeComponent() {
  return (
    <div className="px-2 py-10">
      <DirectoryMenu />
    </div>
  );
}

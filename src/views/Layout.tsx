import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-3xl font-bold underline">Interactive List Example</h1>
      <Outlet />
    </div>
  );
};

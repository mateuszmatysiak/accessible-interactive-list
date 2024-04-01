import { NavLink } from "react-router-dom";

export const HomeView = () => {
  return (
    <NavLink to="list" className="text-blue-600 hover:text-blue-700 underline">
      Go to interactive list
    </NavLink>
  );
};

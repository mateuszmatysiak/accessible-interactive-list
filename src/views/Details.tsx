import React from "react";
import { NavLink, useParams } from "react-router-dom";

export const DetailsView = () => {
  const { detailsId } = useParams<"detailsId">();

  const [count, setCount] = React.useState(0);

  return (
    <div className="flex-1 flex flex-col gap-4 p-4 rounded-lg bg-gray-300">
      <NavLink
        to="/list"
        className="text-blue-600 hover:text-blue-700 underline"
      >
        Go back to interactive list
      </NavLink>

      <h1 className="text-xl font-medium">
        {detailsId?.split("-").join(" ").toUpperCase()}
      </h1>

      <button
        onClick={() => setCount((prevCount) => ++prevCount)}
        className="w-fit p-4 bg-gray-400 text-gray-800 rounded"
      >
        Counter: {count}
      </button>
    </div>
  );
};

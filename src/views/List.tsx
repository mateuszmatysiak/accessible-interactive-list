import { NavLink, Outlet } from "react-router-dom";
// import { InteractiveLinkList } from "../components/InteractiveLinkList";
import { InteractiveButtonList } from "../components/InteractiveButtonList";
// import { LIST } from "../utils/data";

export const ListView = () => {
  return (
    <>
      <NavLink to="/" className="text-blue-600 hover:text-blue-700 underline">
        Go back to home
      </NavLink>

      <div className="flex gap-4">
        {/* <InteractiveLinkList className="bg-gray-200 p-4 rounded-lg flex flex-col gap-4 w-[320px] overflow-y-auto">
          {LIST.map((listItem) => (
            <InteractiveLinkList.Item
              key={listItem.label}
              to={listItem.to}
              className="text-gray-600 hover:text-gray-700 underline"
            >
              Link: {listItem.label}
            </InteractiveLinkList.Item>
          ))}
        </InteractiveLinkList> */}

        <InteractiveButtonList />

        <Outlet />
      </div>
    </>
  );
};

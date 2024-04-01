import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useNavigate } from "react-router-dom";
import { LIST } from "../../utils/data";

export const InteractiveButtonList = () => {
  const navigate = useNavigate();

  return (
    <ToggleGroup.Root
      type="single"
      aria-label="List of link items"
      className="bg-gray-200 p-4 rounded-lg flex flex-col gap-4 w-[320px] overflow-y-auto"
    >
      {LIST.map((listItem) => (
        <ToggleGroup.Item
          value={listItem.to}
          onClick={() => navigate(`/list/${listItem.to}`)}
          aria-label="Link item 1"
          className="w-fit"
        >
          Button: {listItem.label}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
};

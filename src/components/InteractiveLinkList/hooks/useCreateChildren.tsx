import React from "react";
import { useManageFocus } from "./useManageFocus";

interface UseCreateChildrenProps extends React.PropsWithChildren {}

export const useCreateChildren = (props: UseCreateChildrenProps) => {
  const { children } = props;

  const childrenCount = React.Children.count(children);

  const [currentFocusIndex, handleKeyDown] = useManageFocus({
    childrenCount,
  });

  const newChildren = React.Children.map(children, (child, childIndex) => {
    if (React.isValidElement(child)) {
      const isChildFocused = currentFocusIndex === childIndex;

      return (
        <child.type
          {...child.props}
          onKeyDown={handleKeyDown}
          tabIndex={isChildFocused ? 0 : -1}
        />
      );
    }
  });

  return { newChildren };
};

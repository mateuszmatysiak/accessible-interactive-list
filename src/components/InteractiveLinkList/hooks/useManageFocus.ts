import React from "react";

type FocusIndex = number | null;

interface UseManageFocusProps {
  childrenCount: number;
}

export const useManageFocus = (props: UseManageFocusProps) => {
  const { childrenCount } = props;

  const [currentFocusIndex, setCurrentFocusIndex] =
    React.useState<FocusIndex>(0);

  const handleKeyDown = React.useCallback<(event: KeyboardEvent) => void>(
    (event) => {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();

          setCurrentFocusIndex(
            currentFocusIndex === null
              ? 0
              : currentFocusIndex === childrenCount - 1
              ? 0
              : currentFocusIndex + 1
          );
          break;
        case "ArrowUp":
          event.preventDefault();

          setCurrentFocusIndex(
            currentFocusIndex === null
              ? childrenCount - 1
              : currentFocusIndex === 0
              ? childrenCount - 1
              : currentFocusIndex - 1
          );
          break;
      }
    },
    [childrenCount, currentFocusIndex, setCurrentFocusIndex]
  );

  return [currentFocusIndex, handleKeyDown] as const;
};

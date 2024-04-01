import React from "react";
import { NavLink, To } from "react-router-dom";
import { useCreateChildren } from "./hooks/useCreateChildren";
import { useTriggerFocus } from "./hooks/useTriggerFocus";

interface InteractiveLinkListProps
  extends React.ComponentPropsWithoutRef<"ul"> {}

export const InteractiveLinkList = (props: InteractiveLinkListProps) => {
  const { children, ...restProps } = props;

  const { newChildren } = useCreateChildren({ children });

  return (
    <ul aria-label="List of link items" {...restProps}>
      {newChildren}
    </ul>
  );
};

interface InteractiveLinkListItemProps
  extends React.ComponentPropsWithoutRef<"li"> {
  to: To;
}

const InteractiveLinkListItem = (props: InteractiveLinkListItemProps) => {
  const { children, to, tabIndex, ...restProps } = props;

  const linkRef = useTriggerFocus({ tabIndex });

  return (
    <li {...restProps}>
      <NavLink ref={linkRef} tabIndex={tabIndex} to={to}>
        {children}
      </NavLink>
    </li>
  );
};

InteractiveLinkList.Root = InteractiveLinkList;
InteractiveLinkList.Item = InteractiveLinkListItem;

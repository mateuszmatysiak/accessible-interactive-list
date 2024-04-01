import React from "react";

interface UseTriggerFocusProps {
  tabIndex?: number;
}

export const useTriggerFocus = (props: UseTriggerFocusProps) => {
  const { tabIndex } = props;

  const linkRef = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    if (tabIndex === 0) {
      linkRef.current?.focus();
    }
  }, [tabIndex]);

  return linkRef;
};

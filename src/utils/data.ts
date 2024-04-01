export const LIST = Array.from({ length: 24 }).map((_, index) => {
  const listItemId = index + 1;

  return {
    label: `ListItem ${listItemId}`,
    to: `listItem-${listItemId}`,
  };
});

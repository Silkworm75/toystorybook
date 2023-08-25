import React from "react";

export const withMaxWidth = (Story) => {
  return (
    <div style={{ margin: "3em", border: "1px solid red" }}>
      <Story />
    </div>
  );
};


export const withBlackBorder = (Story) => {
  return (
    <div style={{ border: "10px solid #000" }}>
      <Story />
    </div>
  );
};

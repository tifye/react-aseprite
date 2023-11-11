import React from "react";

export default function ({ children }) {
  return (
    <dialog height={500} width={500} title="Hello from nodejs" x={100} y={100}>
      {children}
    </dialog>
  );
}

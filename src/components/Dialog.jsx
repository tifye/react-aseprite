import React from "react";

export default function ({ children }) {
  return (
    <dialog height={500} width={500}>
      {children}
    </dialog>
  );
}

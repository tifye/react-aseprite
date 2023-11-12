import React from "react";

export default function ({ children, title, notitlebar, onclose }) {
  return (
    <dialog title={title} notitlebar={notitlebar} onclose={onclose}>
      {children}
    </dialog>
  );
}

import React from "react";

export default function ({ text, onclick, label, focus, visible, selected }) {
  return (
    <button
      text={text}
      onclick={onclick}
      label={label}
      focus={focus}
      visible={visible}
      selected={selected}
    ></button>
  );
}

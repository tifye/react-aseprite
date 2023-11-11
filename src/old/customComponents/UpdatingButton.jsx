import React from "react";
import Button from "../components/Button";

export default function () {
  function onClick() {
    console.log("Clicked!");
  }
  return <Button text="Click me!" onClick={onClick}></Button>;
}

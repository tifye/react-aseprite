import React from "react";
import Button from "../components/button";
import Dialog from "../components/Dialog";
import Break from "../components/Break";
import Label from "../components/Label";
import Separator from "../components/Separator";

export default function () {
  const [count, setCount] = React.useState(0);

  function addClicked() {
    setCount((count) => {
      console.log(count);
      return count + 1;
    });
  }

  function subClicked() {
    setCount((count) => {
      console.log(count);
      return count - 1;
    });
  }

  return (
    <Dialog title="Meep">
      <Label tail={`Counter: ${count}`} />
      <Button text="-" onclick={subClicked} />
      <Button text="+" onclick={addClicked} />
      <Separator text="The button below does nothing" />
      <Button text="Does nothing" focus={true} />
      <Break />
      <Button text="I too, do nothing" />
    </Dialog>
  );
}

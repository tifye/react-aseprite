import React from "react";
import Button from "../components/button";
import Dialog from "../components/Dialog";
import Break from "../components/Break";
import Label from "../components/Label";
import Separator from "../components/Separator";
import getColors from "./get-colors";

export default function () {
  const [count, setCount] = React.useState(0);
  const [colors, setColors] = React.useState(null);

  React.useEffect(() => {
    const loadShades = async () => {
      const colors = await getColors();
      setColors(colors);
    };
    loadShades();
  }, []);

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

  function shadesClicked(data) {
    console.log("Shades clicked", data);
  }

  return (
    <Dialog title="Meep">
      <Label tail={`Counter: ${count}`} />
      <Button text="-" onclick={subClicked} />
      <Button text="+" onclick={addClicked} />
      <Separator text="The button below does nothing" />
      <Button text="Does nothing" focus={true} />
      <Break />      
      {colors && colors.map((colorsRow) => (
        <><shades colors={colorsRow} mode="sort" onclick={shadesClicked} /><newrow /></>
      ))}
    </Dialog>
  );
}

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
    <dialog title="Meep">
      <label text={`Counter: ${count}`} />
      <button text="-" onclick={subClicked} />
      <button text="+" onclick={addClicked} />
      <separator text="The button below does nothing" />
      <button text="Does nothing" focus={true} />
      <newrow />
      {colors &&
        colors.map((colorsRow) => (
          <>
            <shades colors={colorsRow} mode="sort" onclick={shadesClicked} />
            <newrow />
          </>
        ))}
    </dialog>
  );
}

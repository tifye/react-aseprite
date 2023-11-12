import React from "react";
import Button from "../components/button";
import Dialog from "../components/Dialog";
import Break from "../components/Break";
import Label from "../components/Label";
import Separator from "../components/Separator";

const defColors = [
  { red: 255, green: 0, blue: 0 },
  { red: 0, green: 255, blue: 0 },
  { red: 0, green: 0, blue: 255 },
  { red: 255, green: 255, blue: 0 },
  { red: 255, green: 0, blue: 255 },
  { red: 0, green: 255, blue: 255 },
  { red: 255, green: 255, blue: 255 },
  { hue: 120, saturation: 0, brightness: 0 },
];

function swapRandomColors(arg) {
  const colors = [...arg];
  const a = Math.floor(Math.random() * colors.length);
  const b = Math.floor(Math.random() * colors.length);
  const tmp = colors[a];
  colors[a] = colors[b];
  colors[b] = tmp;
  return colors;
}

export default function () {
  const [count, setCount] = React.useState(0);
  const [colors, setColors] = React.useState(defColors);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setColors((old) => swapRandomColors(old));
      console.log("Colors changed");
    }, 1000);
    return () => clearInterval(interval);
  });

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
      <shades colors={colors} mode="sort" onclick={shadesClicked} />
      <Break />
      <shades colors={colors} mode="sort" />
      <Break />
      <shades colors={colors} mode="sort" />
      <Break />
      <shades colors={colors} mode="sort" />
      <Break />
      <shades colors={colors} mode="sort" />
    </Dialog>
  );
}

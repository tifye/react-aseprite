import React from "react";

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
    <dialog title="Meep">
      <label text={`Counter: ${count}`} />
      <button text="-" onclick={subClicked} />
      <button text="+" onclick={addClicked} />
      <separator text="The button below does nothing" />
      <button text="Does nothing" focus={true} />
      <newrow />
    </dialog>
  );
}

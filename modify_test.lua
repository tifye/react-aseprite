local dialog = Dialog {
  title = "Dialog modication test"
}

dialog:newrow {
  always = true
}
:button {
  id = "add",
  text = "Add button",
  onclick = function()
    dialog:button {
      id = "added",
      text = "Added button"
    }
  end
}
:button {
  id = "remove",
  text = "Remove button",
  onclick = function()
    print(dialog.data)
  end
}

dialog:show {
  wait = false
}
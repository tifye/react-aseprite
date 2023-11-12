local dialog = Dialog {
  title = "Dialog modication test"
}

local counter = 0

dialog:newrow {
  always = true
}
:button {
  id = "target",
  text = "text",
  label = "label",
}
:button {
  id = "text",
  text = "Change text",
  onclick = function()
    counter = counter + 1
    dialog:modify {
      id = "target",
      text = counter
    }
  end
}
:button {
  id = "label",
  text = "Change text",
  onclick = function()
    counter = counter + 1
    dialog:modify {
      id = "target",
      label = counter
    }
  end
}

dialog:show {
  wait = false
}
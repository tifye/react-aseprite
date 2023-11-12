local DIALOG = "dialog"
local BUTTON = "button"
local NEWROW = "newrow"

local ACTION = "action"
local CREATE = "create"

local userDialog

local dialog = Dialog {
    title = "Websocket Render Test"
}
dialog:newrow {
    always = true
}
dialog.bounds = Rectangle(300, 300, 250, 250)
dialog
:button {
    id = "connect",
    text = "Connect",
    onclick = function()
        Ws:connect()
    end
}
:button {
    id = "disconnect",
    text = "Disconnect",
    onclick = function()
        Ws:close()
    end
}

function Refresh()
    dialog:repaint()
end

function EmitEvent(id, event, data) 
  Ws:sendText(json.encode({
    id = id,  
    event = event,
    data = data
  }))
end

function CreateButton(id, data)
  if data.label == "" then 
    data.label = nil
  end
  userDialog:button {
    id = id,
    text = data.text,
    label = data.label,
    selected = data.selected,
    focus = data.focus,
    visible = data.visible,
    onclick = function()
      data = {
        message = data.text
      }
      EmitEvent(id, "click", data)
    end
  }
end

function CreateDialog(id, data)
  userDialog = Dialog { 
    title = data.title,
    notitlebar = data.notitlebar,
    onclose = function()
      Ws:close()
    end
  }
  userDialog:newrow {
    always = false
  }
end

function CreateNewRow(id, data)
  userDialog:newrow()
end

DialogActions = {
  ["show"] = function(id, data)
    userDialog:show {
      wait = false
    }
  end
}

CreateHandlers = {
    [BUTTON] = CreateButton,
    [DIALOG] = CreateDialog,
    [NEWROW] = CreateNewRow
}

ActionHandlers = {
  [DIALOG] = DialogActions
}

RequestHandlers = {
  [CREATE] = function(obj)
    local handler = CreateHandlers[obj.type]
    if handler ~= nil then
        handler(obj.id, obj.data)
    end
  end,
  [ACTION] = function(obj)
    local handler = ActionHandlers[obj.type]
    if handler == nil then
        return
    end

    local actionHandler = handler[obj.action]
    if actionHandler ~= nil then
      actionHandler(obj.id, obj.data)
    end
  end
}

function HandleTextMessage(data)
    local obj = json.decode(data)
    if obj.data == nil then
      obj.data = {}
    end
    local handler = RequestHandlers[obj.method]
    if handler ~= nil then
        handler(obj)
    end

    Refresh()
end

MessageHandlers = {
    [WebSocketMessageType.TEXT] = HandleTextMessage,
    [WebSocketMessageType.OPEN] = function(data)
    end,
    [WebSocketMessageType.CLOSE] = function(data)
        Ws:close()
    end
}

function HandleMessage(mType, data)
    local handler = MessageHandlers[mType]
    if handler ~= nil then
        handler(data)
    end
end

Ws = WebSocket{
    onreceive = HandleMessage,
    url = "http://127.0.0.1:8081",
    deflate = false
}

dialog:show {
    wait = false
}
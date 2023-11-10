local curSepId = 1

local dialog = Dialog {
    title = "Websocket Render Test"
}
dialog:newrow {
    always = true
}
dialog.bounds = Rectangle(300, 300, 250, 250)
dialog
:separator {
    id = "sep1",
    text = "Websocket Render Test"
}
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
:button {
    id = "create",
    text = "Send Create Separator meep",
    onclick = function()
        Ws:sendText("create separator")
    end
}

function Refresh()
    dialog:repaint()
end

function AddSeparator(dialog, text)
    local id = "sep" .. curSepId
    curSepId = curSepId + 1
    dialog:separator {
        id = id,
        text = text
    }
    return id
end

function EmitEvent(id, event, data) 
  Ws:sendText(json.encode({
    id = id,  
    event = event,
    data = data
  }))
end

function CreateButton(id, data)
  dialog:button {
    id = id,
    text = data.text,
    onclick = function()
      data = {
        message = data.text
      }
      EmitEvent(id, "click", data)
    end
  }
end

CreateHandlers = {
    ["button"] = CreateButton
}

RequestHandlers = {
  ["create"] = function(obj)
    local handler = CreateHandlers[obj.type]
    if handler ~= nil then
        handler(obj.id, obj.data)
    end
  end
}

function HandleTextMessage(data)
    local obj = json.decode(data)
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
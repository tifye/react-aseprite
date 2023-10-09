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
    text = "Send Create Separator",
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

function HandleMessage(mType, data)
    if mType == WebSocketMessageType.OPEN then
        Ws:sendText("Hello from Lua!")
    
    elseif mType == WebSocketMessageType.CLOSE then
        Ws:close()

    elseif mType == WebSocketMessageType.TEXT then
        AddSeparator(dialog, data)
        Refresh()
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
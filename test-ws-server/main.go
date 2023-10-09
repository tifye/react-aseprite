package main

import (
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{}

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		conn, err := upgrader.Upgrade(w, r, nil)
		if err != nil {
			log.Fatalf("Could not upgrade connection: %s\n", err.Error())
		}
		defer conn.Close()

		for {
			mType, message, err := conn.ReadMessage()
			if err != nil {
				log.Printf("Could not read message: %s\n", err.Error())
				break
			}

			log.Printf("Message type: %d\n", mType)
			log.Printf("Message: %s\n", message)

			err = conn.WriteMessage(mType, []byte("Hello from go server"))
			if err != nil {
				log.Printf("Could not write message: %s\n", err.Error())
				break
			}
		}

		w.Write([]byte("Hello world"))
	})

	err := http.ListenAndServe(":8081", nil)
	if err != nil {
		log.Fatalf("Could not start server: %s\n", err.Error())
	}
}

import { io, Socket } from "socket.io-client";

import { ISocketUri } from "../types/constants";

export default class WebSocket {

	private static uri: string = ISocketUri.dev;

	private static socket: Socket = io(WebSocket.uri);

	public static Request(id: string) {
		WebSocket.socket.emit("request", { test: `req from user ${id}` });
	}

	public static Stop(id: string) {
		WebSocket.socket.emit("stop-loop", id);
	}

	public static Start(id: string) {
		WebSocket.socket.emit("start-loop", id);
	}
}
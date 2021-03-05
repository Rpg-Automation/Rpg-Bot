import { io, Socket } from "socket.io-client";

import { SocketUri } from "../types/constants";
import config from "../helpers/config";

export default class WebSocket {

	private static uri: string = (config.IS_PROD ? SocketUri.prod : SocketUri.dev);

	private static socket: Socket = io(WebSocket.uri);

	public static Creds(id: string) {
		WebSocket.socket.emit("oauth-creds", id);
	}

	public static Request(id: string) {
		WebSocket.socket.emit("request", { test: `req from user ${id}` });
	}

	public static Stop(id: string) {
		WebSocket.socket.emit("request-stop", id);
	}

	public static Start(id: string) {
		WebSocket.socket.emit("request-start", id);
	}

	public static Pause(id: string) {
		WebSocket.socket.emit("request-pause", id);
	}

	public static Resume(id: string) {
		WebSocket.socket.emit("request-resume", id);
	}
}
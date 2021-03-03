import { Message } from "discord.js";
import WebSocket from "../services/websocket";

export default class UserHandler {
	public static HandleMessage(msg: Message) {
		if (/.*ping.*/gmi.test(msg.content)) {
			msg.channel.send("pong");
		}
		else if (/.*pong.*/gmi.test(msg.content)) {
			msg.channel.send("ping");
		}
		else if (/.*fetch.*/gmi.test(msg.content)) {
			WebSocket.Request(msg.author.id);
			msg.channel.send("done");
		}
	}
}
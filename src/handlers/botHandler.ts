import { Message, Client } from "discord.js";

import WebSocket from "../services/websocket";

export default class BotHandler {

	public static HandleMessage(msg: Message, client: Client) {
		if (/.*(epic guard).*/gmi.test(msg.content)) {
			const userId: string = msg.mentions.members.first().id;
			client.users.cache.get(userId).send(`<@${userId.toString()}> Epic Guard Detected! ${msg.url}`);
			WebSocket.Stop(userId);
		}
	}
}
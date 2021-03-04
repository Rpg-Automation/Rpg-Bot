import { Message, Client, GuildMember } from "discord.js";

import WebSocket from "../services/websocket";

export default class BotHandler {

	public static HandleMessage(msg: Message, client: Client) {
		if (/.*(epic guard).*/gmi.test(msg.content)) {
			const mention: GuildMember = msg.mentions.members.first();
			if (!mention) return;

			const userId: string = mention.id;
			client.users.cache.get(userId).send(`<@${userId.toString()}> Epic Guard Detected! ${msg.url}`);
			WebSocket.Stop(userId);
		}
	}
}
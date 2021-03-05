import { Message, Client, GuildMember } from "discord.js";

import WebSocket from "../services/websocket";

export default class BotHandler {

	public static HandleMessage(msg: Message, client: Client) {
		if (/.*(epic guard).*/gmi.test(msg.content)) {
			const mention: GuildMember = msg.mentions.members.first();
			if (!mention) return;

			const userId: string = mention.id;
			client.users.cache.get(userId).send(`<@${userId.toString()}> Epic Guard Detected! ${msg.url}`);
			WebSocket.Pause(userId);
		}
		//else if (/.*(epic guard).*(everything seems fine)/gmi.test(msg.content)) {
		//	const guildId: string = msg.guild.id;
		//	const guild: Guild = client.guilds.cache.find(a => a.id == guildId);
		//	const user: string = msg.content.split("fine ")[1].split(",")[0];

		//	const userId: string = guild.members.cache.find(a => a.user.username.trim() == user.trim()).id;
		//	WebSocket.Resume(userId);
		//}
	}
}
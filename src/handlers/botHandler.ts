import { Message, Client, GuildMember, Collection, Guild } from "discord.js";

import WebSocket from "../services/websocket";

export default class BotHandler {

	public static HandleMessage(msg: Message, client: Client) {

		if (/.*(epic guard).*(everything seems fine)/gmi.test(msg.content)) {
			const guildId: string = msg.guild.id;
			const guild: Guild = client.guilds.cache.find(a => a.id == guildId);
			const user: string = msg.content.split("fine ")[1].split(",")[0];

			const userId: string = guild.members.cache.find(a => a.user.username.trim() == user.trim()).id;
			WebSocket.Resume(userId);
			return msg.channel.send("> Automation Started");
		}
		if (/.*(epic guard).*(stop there).*/gmi.test(msg.content)) {
			const mention: GuildMember = msg.mentions.members.first();
			if (!mention) return;

			const userId: string = mention.id;
			client.users.cache.get(userId).send(`<@${userId.toString()}> Epic Guard Detected! ${msg.url}`);
			WebSocket.Pause(userId);
			msg.channel.send("> Automation Stopped");
		}
	}

	public static async HandleEmbed(msg: Message) {

		// The first player who types the following sentence will get it!
		// Find more commands with rpg help

		if (!msg.embeds[0].footer.text) return;

		interface IMentioned {
			id: string
		}

		let users: IMentioned[] = [];

		if (/.*(this is an event).*/gmi.test(msg.embeds[0].footer.text)) {

			const recents: Collection<string, Message> = await msg.channel.messages.fetch({ limit: 5 });

			recents.forEach((msg: Message): void => {
				if (msg.author.bot) return;
				const exists: IMentioned = users.find(a => a.id == msg.author.id);
				if (exists) return;
				users.push({ id: msg.author.id });
				msg.channel.send(`<@${msg.author.id.toString()}> active world event`);
			});
			users = [];
		}
	}
}
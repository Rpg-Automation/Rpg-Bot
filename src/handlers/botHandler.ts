import { Message, Client, GuildMember, Collection, Guild, User, MessageEmbed, EmbedField } from "discord.js";
import parse from "parse-duration";

import WebSocket from "../services/websocket";
import * as T from "../types/parsed";

export default class BotHandler {

	public static async HandleMessage(msg: Message, client: Client): Promise<void> {
		if (/.*(epic guard).*/gmi.test(msg.content)) {

			if (/.*(everything seems fine)/gmi.test(msg.content)) {
				const guildId: string = msg.guild.id;
				const guild: Guild = client.guilds.cache.find(a => a.id == guildId);
				const matches: RegExpMatchArray = msg.content.match(/.*\*\*(.*)\*\*.*/);
				if (!matches.length) return;

				const user: string = matches[1];
				//const member: GuildMember = guild.members.cache.find(m => m.user.username == user);
				const userId: string = guild.members.cache.find(a => a.user.username.trim() == user.trim()).id;
				WebSocket.Resume(userId);
				msg.channel.send("> Automation Started");
				return;
			}

			if (/.*(stop there).*/gmi.test(msg.content)) {
				BotHandler.PauseAutomation(msg);
				return;
			}
		}

		if (/.*(type `rpg jail`).*/gmi.test(msg.content)) {
			BotHandler.PauseAutomation(msg);
			return;
		}
	}

	public static async HandleEmbed(msg: Message) {

		// The first player who types the following sentence will get it!
		// Find more commands with rpg help
		const embed: MessageEmbed = msg.embeds[0];
		if (!embed.footer) return;

		interface IMentioned {
			id: string
		}

		if (/.*(this is an event).*/gmi.test(embed.footer.text)) {

			const users: IMentioned[] = [];
			const recents: Collection<string, Message> = await msg.channel.messages.fetch({ limit: 5 });

			recents.forEach((msg: Message): void => {
				if (msg.author.bot) return;
				const exists: IMentioned = users.find(a => a.id == msg.author.id);
				if (exists) return;
				users.push({ id: msg.author.id });
				msg.channel.send(`<@${msg.author.id.toString()}> active world event`);
			});

			return;
		}

		if (/.*("rpg rd").*/gmi.test(embed.footer.text)) {
			const commands: T.Command[] = [];

			const fields: EmbedField[] = embed.fields;
			fields.forEach((field: EmbedField): void => {
				const cooldowns: string[] = field.value.split("\n");
				cooldowns.forEach((cooldown: string): void => {
					const data: RegExpMatchArray = cooldown.match(/.*`(.*)`(.*\(\*\*(.*)\*\*\))?/);
					if (!data.length) return;

					const command: T.Command = new T.Command(data[1], parse(data[3]));
					commands.push(command);
				});
			});

			if (!commands) return;

			WebSocket.Cooldowns(msg.author.id, commands);
		}
	}

	private static PauseAutomation(msg: Message) {
		const mention: GuildMember = msg.mentions.members.first();
		if (!mention) return;

		const user: User = mention.user;
		user.send(`<@${user.id}> Epic Guard Detected! ${msg.url}`);
		WebSocket.Pause(user.id);
		return msg.channel.send("> Automation Stopped");
	}
}
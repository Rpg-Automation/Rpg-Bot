/* eslint-disable indent */
import { Client, Message } from "discord.js";

import config from "./helpers/config";
import WebSocket from "./services/websocket";
import { Ids } from "./types/constants";
import BotHandler from "./handlers/botHandler";
import UserHandler from "./handlers/userHandler";

const client: Client = new Client();

client.on("ready", () => {
	WebSocket.Creds(Ids.self);
	console.log(`${new Date}\nLogged in as ${client.user.tag} in ${config.NODE_ENV}`);
});

client.on("message", async (msg: Message) => {
	try {
		switch (msg.author.id) {
			case Ids.self:
				return;

			case Ids.rpgBot:
				if (msg.embeds.length >= 1) {
					await BotHandler.HandleEmbed(msg);
				}
				return BotHandler.HandleMessage(msg, client);

			default:
				return UserHandler.HandleMessage(msg);
		}
	} catch (error) {
		console.log(error);
	}
});

client.login(config.BOT_TOKEN);
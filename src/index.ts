/* eslint-disable indent */
import { Client, Message } from "discord.js";

import config from "./helpers/config";
import WebSocket from "./services/websocket";
import { Ids } from "./types/constants";
import BotHandler from "./handlers/botHandler";
import UserHandler from "./handlers/userHandler";

const client: Client = new Client();

let self: string;

client.on("ready", () => {
	console.log(`${new Date}\nLogged in as ${client.user.tag} in ${config.NODE_ENV}`);
	self = client.user.id;
	WebSocket.Creds(self);
});

client.on("message", async (msg: Message) => {
	try {
		switch (msg.author.id) {
			case self:
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
		console.error(error);
	}
});

client.login(config.BOT_TOKEN);
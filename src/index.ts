import { Client, Message } from "discord.js";

import config from "./helpers/config";
import { Ids } from "./types/constants";
import BotHandler from "./handlers/botHandler";
import UserHandler from "./handlers/userHandler";

const client: Client = new Client();

client.on("ready", () => {
	console.log(`${new Date}\nLogged in as ${client.user.tag}!`);
});

client.on("message", (msg: Message) => {
	switch (msg.author.id) {
	case Ids.self:
		return;

	case Ids.rpgBot:
		return BotHandler.HandleMessage(msg);

	default:
		return UserHandler.HandleMessage(msg);
	}
});

client.login(config.BOT_TOKEN);

import { Client, Message } from "discord.js";

import WebSocket from "./services/websocket";
import config from "./helpers/config";
import { Ids } from "./types/constants";

const client: Client = new Client();

client.on("ready", () => {
	console.log(`${new Date}\nLogged in as ${client.user.tag}!`);
});

client.on("message", (msg: Message) => {
	if (msg.author.id === Ids.self) return;

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
});

client.login(config.BOT_TOKEN);

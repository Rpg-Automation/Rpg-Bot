import { Message } from "discord.js";

import WebSocket from "../services/websocket";
import { UserCmds } from "../types/constants";
export default class UserHandler {

	public static HandleMessage(msg: Message) {

		const pref: string = msg.content.trim().split(" ")[0].toLowerCase().trim();
		const arg: string = msg.content.trim().split(" ")[1].toLowerCase().trim();

		if (pref !== UserCmds.prefix) return;

		if (arg == UserCmds.start) {
			const userId: string = msg.author.id;
			WebSocket.Start(userId);
			msg.channel.send("> Automation Started");
		}
		if (arg == UserCmds.stop) {
			const userId: string = msg.author.id;
			WebSocket.Stop(userId);
			msg.channel.send("> Automation Stopped");
		}
		else if (arg == UserCmds.ping) {
			msg.channel.send("epic pong");
		}
		else if (arg == UserCmds.pong) {
			msg.channel.send("> UNHANDLED ERROR EXPECPTION /.*^.*(epic pong)@$)&(*#$).*$^.*/");
		}
	}
}
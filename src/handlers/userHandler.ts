import { Message } from "discord.js";

import WebSocket from "../services/websocket";
import { UserCmds } from "../types/constants";
export default class UserHandler {

	public static HandleMessage(msg: Message) {

		const args: string[] = msg.content.trim().split(" ");
		if (args.length < 2) return;

		const pref: string = args[0].toLowerCase().trim();
		if (pref !== UserCmds.prefix) return;

		const cmd: string = args[1].toLowerCase().trim();

		if (cmd == UserCmds.start) {
			const userId: string = msg.author.id;
			WebSocket.Start(userId);
			msg.channel.send("> Automation Started");
		}
		else if (cmd == UserCmds.stop) {
			const userId: string = msg.author.id;
			WebSocket.Stop(userId);
			msg.channel.send("> Automation Stopped");
		}
		else if (cmd == UserCmds.ping) {
			msg.channel.send("epic pong");
		}
		else if (cmd == UserCmds.pong) {
			msg.channel.send("> UNHANDLED ERROR EXPECPTION /.*^.*(epic pong)@$)&(*#$).*$^.*/");
		}
	}
}
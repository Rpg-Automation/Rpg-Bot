import { Message } from "discord.js";

import WebSocket from "../services/websocket";
import { UserCmds } from "../types/constants";

export default class UserHandler {

	public static HandleMessage(msg: Message) {

		if (!msg.content.trim().toLowerCase().startsWith(UserCmds.prefix)) return;

		const content: string = msg.content.split(UserCmds.prefix)[1];

		if (content.trim().toLowerCase() == UserCmds.start) {
			const userId: string = msg.author.id;
			WebSocket.Start(userId);
		}
		if (content.trim().toLowerCase() == UserCmds.stop) {
			const userId: string = msg.author.id;
			WebSocket.Stop(userId);
		}
		else if (content.trim().toLowerCase() == UserCmds.ping) {
			msg.channel.send("epic pong");
		}
		else if (content.trim().toLowerCase() == UserCmds.pong) {
			msg.channel.send("> UNHANDLED ERROR EXPECPTION /.*^.*(epic pong)@$)&(*#$).*$^.*/");
		}
	}
}
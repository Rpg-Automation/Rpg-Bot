import { Message } from "discord.js";

export default class UserHandler {

	public static HandleMessage(msg: Message) {

		if (/.*ping.*/gmi.test(msg.content)) {
			msg.channel.send("pong");
		}
		else if (/.*pong.*/gmi.test(msg.content)) {
			msg.channel.send("> UNHANDLED ERROR EXPECPTION /.*@#*(ping)#$)&(*#$)#*$#@@*/");
		}
	}
}
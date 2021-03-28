/* eslint-disable no-unused-vars */

export enum Ids {
	rpgBot = "555955826880413696"
}

export enum SocketUri {
	dev = "http://127.0.0.1:3000",
	prod = "https://rpg-rtc.herokuapp.com/"
}

export enum Env {
	dev = "development",
	prod = "production"
}

export enum UserCmds {
	prefix = "epic",
	start = "start",
	stop = "stop",
	ping = "ping",
	pong = "pong"
}

export enum CommandType {
	None,
	Daily,
	Weekly,
	Lootbox,
	Vote,
	Hunt,
	Adventure,
	Training,
	Duel,
	Quest,
	Working,
	Horse,
	Arena,
	Dungeon
}
import { CommandType } from "../types/constants";

export class Command {
	public type: CommandType;
	public cooldown: number;
	public available: Date;

	constructor(type: CommandType, cooldown: number) {
		this.type = type;
		this.cooldown = cooldown ?? 0;
		this.available = new Date(Date.now() + this.cooldown);
	}
}
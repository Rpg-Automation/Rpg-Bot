import { CommandType } from "../types/constants";

export class Command {
	public type: CommandType;
	public cooldown: number;

	constructor(type: CommandType, cooldown: number) {
		this.type = type;
		this.cooldown = cooldown ?? 0;
	}
}
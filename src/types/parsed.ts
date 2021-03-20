export class Command {
	public type: string;
	public cooldown: number;
	public available: Date;

	constructor(type: string, cooldown: number) {
		this.type = type;
		this.cooldown = cooldown ?? 0;
		this.available = new Date(Date.now() + this.cooldown);
	}
}
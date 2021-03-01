export class Checks {
	public static ping: RegExp = /.*(ping).*/gmi;
	public static pong: RegExp = /.*(pong).*/gmi;
	public static toggle: RegExp = /.*(swap).*/gmi;
	public static reset: RegExp = /.*(reset).*/gmi;
	public static epicGuard: RegExp = /.*(epic guard).*/gmi;
	public static event: RegExp = /.*(this is an event).*/gmi;
}

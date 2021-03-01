import dotenv from "dotenv";

dotenv.config();

const config = {
	BOT_TOKEN: <string>process.env.BOT_TOKEN || undefined
};

if (!config.BOT_TOKEN) {
	console.error("missing BOT_TOKEN");
	process.exit(-1);
}

export default config;
import dotenv from "dotenv";

dotenv.config();

const config = {
	BOT_TOKEN: <string>process.env.BOT_TOKEN || undefined
};

if (!config.BOT_TOKEN) {
	throw new Error("missing BOT_TOKEN");
}

export default config;
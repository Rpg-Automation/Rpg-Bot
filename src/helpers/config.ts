import dotenv from "dotenv";

import { Env } from "../types/constants";

dotenv.config();

const config = {
	NODE_ENV: <Env>process.env.NODE_ENV || Env.dev,
	IS_PROD: <boolean>(process.env.NODE_ENV == Env.dev ? false : true),
	BOT_TOKEN: <string>process.env.BOT_TOKEN || undefined
};

if (!config.BOT_TOKEN) {
	throw new Error("missing BOT_TOKEN");
}

export default config;
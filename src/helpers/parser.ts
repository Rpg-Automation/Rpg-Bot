
/* eslint-disable indent */
import { CommandType } from "../types/constants";

export default class Parser {

	public static CommandType(type: string): CommandType {
		try {
			if (!type) return CommandType.None;

			const names: string[] = type.split(" ");
			const name: string = names[0];
			if (!name) return CommandType.None;

			switch (name) {
				case "Daily":
					return CommandType.Daily;

				case "Weekly":
					return CommandType.Weekly;

				case "Lootbox":
					return CommandType.Lootbox;

				case "Vote":
					return CommandType.Vote;

				case "Hunt":
					return CommandType.Hunt;

				case "Adventure":
					return CommandType.Adventure;

				case "Training":
					return CommandType.Training;

				case "Duel":
					return CommandType.Duel;

				case "Quest":
					return CommandType.Quest;

				case "Chop":
					return CommandType.Working;

				case "Horse":
					return CommandType.Horse;

				case "Arena":
					return CommandType.Arena;

				case "Dungeon":
					return CommandType.Dungeon;

				default:
					return CommandType.None;
			}
		} catch (error) {
			return CommandType.None;
		}
	}
}
/* eslint-disable no-unused-vars */

export enum Ids {
	self = "813419506634063912",
	jude = "349605538532818944",
	dan = "385163156151861259",
	joe = "132619411629670400",
	rpgBot = "555955826880413696"
}

export enum Actions {
	submit = "enter",
	hunt = "rpg hunt",
	adventure = "rpg adventure",
	buyPotion = "rpg buy life potion",
	heal = "rpg heal",
	chop = "rpg chop",
	deposit = "rpg deposit all",
	pickup = "rpg pickup",
	axe = "rpg axe",
	net = "rpg net",
	upgrade = "rpg guild upgrade"
}

export enum Times {
	minute = 60000, // 60000 miliseconds -> one minute
	onePointTwo = 70500 // 705000 miliseconds -> 1.17 minutes
}

export enum ISocketUri {
	dev = "http://127.0.0.1:3000",
	prod = "https://rpg-rtc.herokuapp.com/"
}
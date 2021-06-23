var iFileName = "VR_Gothic-Lineages.js";
RequiredSheetVersion(13);

//Note: This version is incomplete and does not, for instance, include the ability to inherit skills and speed from a prior race.

// Define the source
SourceList["VRGtR"] = {
	name : "Van Richten's Guide to Ravenloft",
	abbreviation : "VRGtR",
	group : "Primary Sources",
	date : "2021/05/18"
};

// Dhampir race written by "Slitherin' Sneakin' Snek#0616" on Discord (also known as MarvinTheParanoidAndroid)
RaceList["dhampir"] = {
	regExpSearch : /dhampir/i,
	name : "Dhampir",
	sortname : "Dhampir",
	source : ["VRGtR", 2],
	plural : "Dhampir",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 },
		climb : { spd : "walk", enc : "walk" }
			},
	weapons : ["dhampir bite"],
	skillstxt : "Choose any two skills",
	vision : ["Darkvision", 60], 
	languageProfs : [1, "Common"],
	scorestxt : "Dhampir (+2 to one ability score of my choice, and +1 to a different score of my choice or three different score by 1)",
	features : {
		"bite (empower self)" : {
			name : "Bite (empower self)",
			minlevel : 1,
			usages: "Proficiency bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus')",
			recovery: "long rest",
			},
	},
	trait : "Dhampir \n  Size: I am Small or Medium (my choice). Type: I am Humanoid.\nSpider Climb: I have a climb speed equal to my walking speed. Starting from third level, I can move up, down and across vertical surfaces and upside down along ceilings, while leaving my hands free.\n When I hit a creature that isn't a construct or undead with my bite, I can either gain hit points or bonus to my next attack roll/ability check equal to the piercing damage dealt. \n Deathless Nature: I don't need to breathe.",
};

AddRacialVariant("dhampir", "medium", {
	regExpSearch : /dhampir medium/i,
	name : "Dhampir (medium)",
	source : ["VRGtR", 2],
	size : 3,
	trait : "Dhampir \n  Size: I am Medium. Type: I am Humanoid.\nSpider Climb: I have a climb speed equal to my walking speed. Starting from third level, I can move up, down and across vertical surfaces and upside down along ceilings, while leaving my hands free.\n When I hit a creature that isn't a construct or undead with my bite, I can either gain hit points or bonus to my next attack roll/ability check equal to the piercing damage dealt. \nDeathless Nature: I don't need to breathe.",
});

AddRacialVariant("dhampir", "small", {
	regExpSearch : /dhampir small/i,
	name : "Dhampir (small)",
	source : ["VRGtR", 2],
	size : 4,
	trait : "Dhampir \n  Size: I am Small. Type: I am Humanoid.\nSpider Climb: I have a climb speed equal to my walking speed. Starting from third level, I can move up, down and across vertical surfaces and upside down along ceilings, while leaving my hands free.\n When I hit a creature that isn't a construct or undead with my bite, I can either gain hit points or bonus to my next attack roll/ability check equal to the piercing damage dealt. \n Deathless Nature: I don't need to breathe.",
});


WeaponsList["dhampir bite"] = {
	regExpSearch : /^(?=.*dhampir)(?=.*bite).*$/i,
	name : "Dhampire Bite",
	source : ["VRGtR", 2],
	ability : 3,
	type : "Natural",
	damage : [1, 4, "piercing"],
	range : "Melee",
	description : "Advantage when at or under half hit points, Can empower myself on hit",
	abilitytodamage : true,
	monkweapon : true
	
};

// Hexblood race written by "Slitherin' Sneakin' Snek#0616" on Discord (also known as MarvinTheParanoidAndroid)
RaceList["hexblood"] = {
	regExpSearch : /hexblood/i,
	name : "Hexblood",
	sortname : "Hexblood",
	source : ["VRGtR", 4],
	plural : "Hexbloods",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
			},
	skillstxt : "Choose any two skills",
	vision : ["Darkvision", 60],
	savetxt : {
		adv_vs : ["charmed"]
	},
	languageProfs : [1, "Common"],
	scorestxt : "Hexblood (+2 to one ability score of my choice, and +1 to a different score of my choice or three different score by 1)",
	features : {
		"hex magic (disguise self)" : {
			name : "Hex Magic (disguise self)",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["disguise self"],
				selection : ["disguise self"],
				oncelr : true,
			},
		},
		"hex magic (hex)" : {
			name : "Hex Magic (hex)",
			spellcastingBonus : {
				spells : ["hex"],
				selection : ["hex"],
				oncelr : true,
			},
		},
		"magic token" : {
			name : "Magic Token",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
		},
	},
	
	trait : "Hexblood (+2 to one ability score of my choice, and +1 to a different score of my choice)\n Size: I am Small or Medium (my choice)\n Type: I am Fey\n As an action, I can imbue a token with magic until I finish a long rest. If I am within 10 miles, I can use an action to either send a telepathic message (up to 25 words) to the creature holding or carrying the token or enter a trance for 1 minute, during which I see and hear from the token as if I were located where it is. When doing this I am blinded and deafened in regard to my own surroundings, which destroys the token.",
};

AddRacialVariant("hexblood", "medium", {
	regExpSearch : /hexblood medium/i,
	name : "Hexblood (medium)",
	source : ["VRGtR", 4],
	size : 3,
	trait : "Hexblood (+2 to one ability score of my choice, and +1 to a different score of my choice)\n Type: I am Fey\n As an action, I can imbue a token with magic until I finish a long rest. If I am within 10 miles, I can use an action to either send a telepathic message (up to 25 words) to the creature holding or carrying the token or enter a trance for 1 minute, during which I see and hear from the token as if I were located where it is. When doing this I am blinded and deafened in regard to my own surroundings, which destroys the token.",
});

AddRacialVariant("hexblood", "small", {
	regExpSearch : /hexblood small/i,
	name : "Hexblood (small)",
	source : ["VRGtR", 4],
	size : 4,
	trait : "Hexblood (+2 to one ability score of my choice, and +1 to a different score of my choice)\n Type: I am Fey\n As an action, I can imbue a token with magic until I finish a long rest. If I am within 10 miles, I can use an action to either send a telepathic message (up to 25 words) to the creature holding or carrying the token or enter a trance for 1 minute, during which I see and hear from the token as if I were located where it is. When doing this I am blinded and deafened in regard to my own surroundings, which destroys the token.",
});

// Reborn race written by "Slitherin' Sneakin' Snek#0616" on Discord (also known as MarvinTheParanoidAndroid)
RaceList["reborn"] = {
	regExpSearch : /reborn/i,
	name : "Reborn",
	sortname : "Reborn",
	source : ["VRGtR", 5],
	plural : "Reborns",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
			},
	skillstxt : "Choose any two skills",
	vision : ["Darkvision", 60],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["disease", "poison", "death saves"],
	},
	languageProfs : [1, "Common"],
	scorestxt : "Reborn (+2 to one ability score of my choice, and +1 to a different score of my choice or three different score by 1)",
	features : {
		"knowledge from a past life" : {
			name : "Knowledge from a Past Life",
			minlevel : 1,
			usages: "Proficiency bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus')",
			recovery: "long rest",
			},
	},
	
	trait : "Reborn (+2 to one ability score of my choice, and +1 to a different score of my choice)\n Size: I am Small or Medium (my choice)\n Type: I am Humanoid\n Deathless Nature: I don't need to eat, drink, or breathe. I don't need to sleep, and magic can't put me to sleep. I can finish a long rest in 4 hours, during which I remain conscious\n Knowledge from a Past Life: When I make an ability check that uses a skill, I can roll a d6 and add the number rolled to the check. I can do this a number of times equal to my proficency bonus per long rest",
};

AddRacialVariant("reborn", "medium",{
	regExpSearch : /reborn medium/i,
	name : "Construct Reborn (medium)",
	source : ["VRGtR", 5],
	size : 3,
	trait : "Reborn (+2 to one ability score of my choice, and +1 to a different score of my choice)\n Type: I am Humanoid\n Deathless Nature: I don't need to eat, drink, or breathe. I don't need to sleep, and magic can't put me to sleep. I can finish a long rest in 4 hours, during which I remain conscious\n Knowledge from a Past Life: When I make an ability check that uses a skill, I can roll a d6 and add the number rolled to the check. I can do this a number of times equal to my proficency bonus per long rest",
});

AddRacialVariant("reborn", "small",{
	regExpSearch : /reborn small/i,
	name : "Undead Reborn (small)",
	source : ["VRGtR", 5],
	size : 3,
	trait : "Reborn (+2 to one ability score of my choice, and +1 to a different score of my choice)\n Type: I am Humanoid\n Deathless Nature: I don't need to eat, drink, or breathe. I don't need to sleep, and magic can't put me to sleep. I can finish a long rest in 4 hours, during which I remain conscious\n Knowledge from a Past Life: When I make an ability check that uses a skill, I can roll a d6 and add the number rolled to the check. I can do this a number of times equal to my proficency bonus per long rest",
});

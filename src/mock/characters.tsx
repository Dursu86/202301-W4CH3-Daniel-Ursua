import { Adviser } from "../models/adviser";
import { Character } from "../models/character";
import { Fighter } from "../models/fighter";
import { King } from "../models/king";
import { Squire } from "../models/squire";

const king = new King("Joffrey", "Baratheon", 29, 12);
const fighterMan = new Fighter("Jaime", "Lannister", 31, "sword", 7);
const fighterWoman = new Fighter("Daenerys", "Targaryen", 18, "ax", 2);
const adviser = new Adviser("Tyrion", "Perez", 41, fighterWoman);
const squire = new Squire("James", "Wheal", 29, fighterMan, 8);

export const charactersData: Character[] = [
  king,
  fighterMan,
  fighterWoman,
  adviser,
  squire,
];

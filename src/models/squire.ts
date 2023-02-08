import { Character } from "./character";
import { Fighter } from "./fighter";

export class Squire extends Character {
  isLive: boolean = true;
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public boss: Character,
    public servility: 0 | 1 | 2 | 3 | 4 | 5 | 7 | 8 | 9 | 10
  ) {
    super(name, family, age);
  }

  greeting() {
    return super.greeting("Soy un loser");
  }

  died() {
    super.died();
  }
}

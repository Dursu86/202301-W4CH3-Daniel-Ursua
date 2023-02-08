import { Character } from "./character";

export class Squire extends Character {
  isLive: boolean = true;
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public boss: Character,
    public servility: number
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

import { Character } from "./character";

describe("Given a Character constructor class", () => {
  describe("When we instantiate an object", () => {
    test("then the instance should have the corresponding properties", () => {
      const character = new Character("John", "Nieve", 34);
      expect(character).toHaveProperty("name");
      expect(character).toHaveProperty("family");
      expect(character).toHaveProperty("age");
    });
    test("if the state of the character change", () => {
      const characterTwo = new Character("Will", "Wheym", 31);
      characterTwo.died();
      expect(characterTwo.isLive).toBe(false);
    });
  });
});

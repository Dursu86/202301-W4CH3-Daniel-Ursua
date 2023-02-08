import { render, screen } from "@testing-library/react";
import { Card } from "./card";

describe("Given a card", () => {
  describe("When it is render", () => {
    test("Then it should have a title", () => {
      render(<Card />);

      const elements = [
        screen.getByRole("heading"),
        screen.getByText(/Familia/i),
      ];
      expect(elements[0]).toBeInTheDocument();
      expect(elements[1]).toBeInTheDocument();
    });
  });
});

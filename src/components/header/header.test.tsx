import { Header } from "./header";
import { render, screen } from "@testing-library/react";

describe("Given a header", () => {
  describe("When it is render", () => {
    test("Then it should have a title", () => {
      render(<Header />);

      const element = screen.getByText(/Card game/i);
      expect(element).toBeInTheDocument();
    });
  });
});

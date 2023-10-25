import { render, screen } from "@testing-library/react";
import CharacterCard from "../components/Character/Character";
import { type CharacterData } from "../type";

describe("Given a Character component", () => {
  describe("When it receives the Luke's data", () => {
    test("Then it should show the Luke inside a heading", () => {
      const luke: CharacterData = {
        id: 1,
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        avatarUrl: "urlAvatar",
        created: "2014-12-09T13:50:51.644000Z",
        url: "https://swapi.dev/api/people/1/",
      };

      render(<CharacterCard character={luke} />);

      const characterName = screen.getByRole("heading", {
        name: luke.name,
      });
      expect(characterName).toBeInTheDocument();
    });
  });
});

describe("Given a Character component", () => {
  describe("When it receives the Luke's data", () => {
    test("Then it should show '172' heigth", () => {
      const luke: CharacterData = {
        id: 1,
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        avatarUrl: "urlAvatar",
        created: "2014-12-09T13:50:51.644000Z",
        url: "https://swapi.dev/api/people/1/",
      };

      render(<CharacterCard character={luke} />);

      const characterHeight = screen.getByText("172");
      expect(characterHeight).toBeInTheDocument();
    });
  });
});

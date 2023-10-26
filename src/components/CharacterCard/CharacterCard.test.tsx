import { render, screen } from "@testing-library/react";
import CharacterCard from "./CharacterCard";
import { type CharacterData } from "../../type";
describe("Given a Character component", () => {
  describe("When it receives the Luke's data", () => {
    test("Then it should show the Luke inside a heading", () => {
      const luke: CharacterData = {
        id: 1,
        name: "Luke Skywalker",
        avatarUrl: "url",
        height: "172",
        mass: "77",
        created: "2014-12-09T13:50:51.644000Z",
        url: "https://swapi.dev/api/people/1/",
      };

      render(<CharacterCard character={luke} increaseMass={() => {}} />);

      const characterName = screen.getByRole("heading", {
        name: luke.name,
      });

      expect(characterName).toBeInTheDocument();
    });
  });

  describe("When it receives the Luke's data", () => {
    test("Then it should show the Luke inside a heading", () => {
      const luke: CharacterData = {
        id: 1,
        name: "Luke Skywalker",
        avatarUrl: "url",
        height: "172",
        mass: "77",
        created: "2014-12-09T13:50:51.644000Z",
        url: "https://swapi.dev/api/people/1/",
      };

      render(<CharacterCard character={luke} increaseMass={() => {}} />);

      const characterName = screen.getByRole("heading", {
        name: luke.name,
      });

      expect(characterName).toBeInTheDocument();
    });
  });
});

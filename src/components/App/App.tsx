import "./App.css";
import CharacterCard from "../CharacterCard/CharacterCard";
import { type CharacterData } from "../../type";
import { useState, useEffect } from "react";

const App = (): React.ReactElement => {
  const getAllCharacters = async (): Promise<CharacterData[]> => {
    const apiUrl =
      "https://starwars-characters-api-qcun.onrender.com/characters";
    const response = await fetch(apiUrl);
    const characterApi = (await response.json()) as CharacterData[];
    const characters: CharacterData[] = characterApi;
    for (const character of characters) {
      character.avatarUrl = `https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`;
    }
    return characters;
  };

  const getCharacter = async (characterId: string): Promise<CharacterData> => {
    const apiUrl = `https://starwars-characters-api-qcun.onrender.com/characters/${characterId}`;
    const request = await fetch(apiUrl);
    const character = (await request.json()) as CharacterData;
    return character;
  };

  const [characters, setCharacters] = useState<CharacterData[]>([]);

  const increaseMass = (characterId: number) => {
    async () => {
      const character = await getCharacter(characterId.toString());
      character.mass + 1;
      console.log("hi");
      const apiUrl = `https://starwars-characters-api-qcun.onrender.com/characters/${character.id}`;
      const request = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(character),
      });
      console.log(request);

      loadApi();
    };
  };

  const loadApi = async () => {
    const apiCharacters = await getAllCharacters();
    setCharacters(apiCharacters);
  };

  useEffect(() => {
    loadApi();
  }, [loadApi]);

  return (
    <div className="app">
      <ul>
        {characters.map((character) => {
          return (
            <li key={character.name}>
              <CharacterCard
                character={character}
                increaseMass={increaseMass}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;

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

  const getCharacter = async (characterId: number): Promise<CharacterData> => {
    const apiUrl = `https://starwars-characters-api-qcun.onrender.com/characters/${characterId}`;
    const request = await fetch(apiUrl);
    const character = (await request.json()) as CharacterData;
    return character;
  };

  const [characters, setCharacters] = useState<CharacterData[]>([]);

  const increaseMass = async (characterId: number) => {
    const character = await getCharacter(characterId);

    const apiUrl = `https://starwars-characters-api-qcun.onrender.com/characters/${characterId}`;
    const response = await fetch(apiUrl, {
      method: "PATCH",
      headers: {
        Accept: "appliction/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mass: character.mass + 1 }),
    });
    console.log(await response);

    loadApi();
  };

  const decreaseMass = async (characterId: number) => {
    const character = await getCharacter(characterId);

    const apiUrl = `https://starwars-characters-api-qcun.onrender.com/characters/${characterId}`;
    const characterMass = character.mass;
    const newCharacterMass = parseInt(characterMass) - 1;
    const response = await fetch(apiUrl, {
      method: "PATCH",
      headers: {
        Accept: "appliction/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mass: newCharacterMass }),
    });
    console.log(await response);

    loadApi();
  };

  const loadApi = async () => {
    const apiCharacters = await getAllCharacters();
    setCharacters(apiCharacters);
  };

  useEffect(() => {
    loadApi();
  }, []);

  return (
    <div className="app">
      <ul>
        {characters.map((character) => {
          return (
            <li key={character.id}>
              <CharacterCard
                character={character}
                increaseMass={increaseMass}
                decreaseMass={decreaseMass}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;

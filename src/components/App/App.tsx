import "./App.css";
import CharacterCard from "../Character/Character";
import { type CharacterData } from "../../type";
import { useState, useEffect } from "react";

const getAllCharacters = async (): Promise<CharacterData[]> => {
  const apiUrl = "https://starwars-characters-api-qcun.onrender.com/characters";
  const response = await fetch(apiUrl);
  const characterApi = (await response.json()) as CharacterData[];
  const characters: CharacterData[] = characterApi;
  for (const character of characters) {
    character.avatarUrl = `https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`;
  }
  return characters;
};

const App = (): React.ReactElement => {
  const [characters, setCharacters] = useState<CharacterData[]>([]);

  useEffect(() => {
    const loadApi = async () => {
      const apiCharacters = await getAllCharacters();
      setCharacters(apiCharacters);
    };

    loadApi();
  }, []);

  return (
    <div className="app">
      <ul>
        {characters.map((character) => {
          return (
            <li key={character.name}>
              <CharacterCard character={character} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;

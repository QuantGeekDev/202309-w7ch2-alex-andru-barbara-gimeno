import "./App.css";
import { type StarWarsApiResponse } from "../../type";

import { type CharacterData } from "../../type";
import CharacterCard from "../CharacterCard/CharacterCard";
import { useState, useEffect } from "react";

const getCharacterIdFromUrl = (url: string) => {
  const urlComponents = url.split("/");
  const lastPosition = urlComponents.length - 2;
  const characterId = urlComponents[lastPosition];

  return characterId;
};

const getAllCharacters = async (): Promise<CharacterData[]> => {
  const apiUrl = "https://swapi.dev/api/people";
  const response = await fetch(apiUrl);
  const characterApi = (await response.json()) as StarWarsApiResponse;
  const characters: CharacterData[] = characterApi.results;
  for (const character of characters) {
    const characterId = parseInt(getCharacterIdFromUrl(character.url));
    character.id = characterId;
    character.avatarUrl = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
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

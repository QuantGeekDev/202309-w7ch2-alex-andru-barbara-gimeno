import "./App.css";
import { type StarWarsApiResponse } from "../../type";

import { type CharacterData } from "../../type";
import CharacterCard from "../CharacterCard/CharacterCard";
import { useState, useEffect } from "react";

const getAllCharacters = async (): Promise<CharacterData[]> => {
  const apiUrl = "https://swapi.dev/api/people";
  const response = await fetch(apiUrl);
  const characterApi = (await response.json()) as StarWarsApiResponse;
  return characterApi.results;
};

const App = (): React.ReactElement => {
  const [characters, setCharacters] = useState<CharacterData[]>([]);

  useEffect(() => {
    const loadApi = async () => {
      const apiCharacters = await getAllCharacters();
      console.log(await apiCharacters);
      setCharacters(apiCharacters);
    };

    loadApi();
  }, [characters]);

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

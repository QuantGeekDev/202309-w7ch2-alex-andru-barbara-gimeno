import "./App.css";

import { type CharacterData } from "../../type";
import { useState, useEffect } from "react";

const getCharacters = async (quantity: number) => {
  const charactersList: CharacterData[] = [];
  for (
    let characterCount = 1;
    characterCount < quantity + 1;
    characterCount++
  ) {
    const characterUrl = `https://swapi.dev/api/people/${characterCount}`;
    const response = await fetch(characterUrl);
    const characterApi = (await response.json()) as CharacterData;
    characterApi.id = characterCount;
    characterApi.avatarUrl = `https://starwars-visualguide.com/assets/img/characters/${characterCount}.jpg`;
    charactersList.push(characterApi);
  }
  return charactersList;
};
const luke: CharacterData = {
  avatarUrl: "",
  created: "",
  height: "",
  id: 0,
  mass: "",
  name: "",
  url: "",
};

const App = (): React.ReactElement => {
  const [characters, setCharacters] = useState<CharacterData[]>([luke]);

  useEffect(() => {
    const loadApi = async () => {
      const characters = await getCharacters(30);
      setCharacters(characters);
    };
    loadApi();
  }, [characters]);

  return (
    <div className="app">
      <ul>
        {characters.map((character) => {
          return (
            <li>
              <CharacterCard character={character} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default App;

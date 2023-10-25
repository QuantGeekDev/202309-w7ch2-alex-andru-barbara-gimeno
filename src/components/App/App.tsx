import "./App.css";
import { type StarWarsApiResponse } from "../../type";
import Button from "../Button/Button";
import Input from "../Input/Input";

import { type CharacterData } from "../../type";
import { useState, useEffect } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";

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
   const [number, setNumber] = useState(0);

  useEffect(() => {
    const loadApi = async () => {
      const apiCharacters = await getAllCharacters();
      setCharacters(apiCharacters);
    };

    loadApi();
  }, []);
   const increase = () => {
    if (number >= 10) {
      return;
    }

    setNumber((number) => number + 1);
  };

  const decrease = () => {
    if (number <= 0) {
      return;
    }

    setNumber((number) => number - 1);

  return (

  <div className="app">
    <ul>
      {characters.map((character) => (
      <li key={character.name}>
        <CharacterCard character={character} />

      </li> 
    ))}
    </ul>

   <div className="button">
    <Button button symbol="-" actionOnClick={decrease} />
    <Input number={number} />
    <Button symbol="+" actionOnClick={increase} />
   </div>
  </div>
        
  );
};

export default App;

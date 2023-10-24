import { type CharacterData } from "../../type";
import CharacterCard from "../CharacterCard/CharacterCard";
import { useState, useEffect } from "react";

const App = (): React.ReactElement => {
  const [character, setCharacters] = useState<CharacterData>();

  useEffect(() => {
    const loadApi = async () => {
      const apiUrl = "https://swapi.dev/api/people/1/";
      const response = await fetch(apiUrl);
      const charactersApi = (await response.json()) as CharacterData;
      setCharacters(charactersApi);
    };
    loadApi();
  }, [character]);

  return (
    <div className="app">
      <ul>
        <CharacterCard character={character!} />
      </ul>
    </div>
  );
};
export default App;

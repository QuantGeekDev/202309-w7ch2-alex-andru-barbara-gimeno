import CharacterCard from "../Character/Character";
import "./App.css";

const App = (): React.ReactElement => {
  const luke = {
    id: 1,
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    created: "2014-12-09T13:50:51.644000Z",
    url: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
  };
  return (
    <div className="app">
      <h1 className="main__title"> Star Wars Characters</h1>
      <img className="logo" src="logo-star-wars.jpg" alt="" />
      <CharacterCard character={luke} />
    </div>
  );
};
export default App;

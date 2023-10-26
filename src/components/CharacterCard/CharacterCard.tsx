import { type CharacterData } from "../../type";
import Button from "../Button/Button";

interface CharacterCardProps {
  character: CharacterData;
  increaseMass: (characterId: number) => void;
  decreaseMass: (characterId: number) => void;
}

const CharacterCard = ({
  character: { id, name, avatarUrl, height, mass, created },
  increaseMass,
  decreaseMass,
}: CharacterCardProps) => {
  return (
    <article className={`character ${name}`}>
      <img className="character__avatar" src={avatarUrl} alt={name} />
      <h2 className="character__name"> {name} </h2>
      <span className="character__height"> Height: {height}</span>
      <span className="character__mass">Mass: {mass}</span>
      <span className="character__creation-date"> Created: {created}</span>
      <Button
        actionOnClick={() => {
          increaseMass(id);
        }}
        text="Add Mass"
        symbol="+"
      />
      <Button
        actionOnClick={() => {
          decreaseMass(id);
        }}
        text="Decrease Mass"
        symbol="-"
      />
    </article>
  );
};

export default CharacterCard;

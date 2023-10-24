import { type CharacterData } from "../../type";

interface CharacterCardProps {
  character: CharacterData;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <article className={`character ${character.name}`}>
      <img
        className="character__avatar"
        src={character.url}
        alt={character.name}
      />
      <h2 className="character__name"> {character.name} </h2>
      <span className="character__height"> {character.height}</span>
      <span className="character__mass">{character.mass}</span>
      <span className="character__creation-date"> {character.created}</span>
    </article>
  );
};

export default CharacterCard;

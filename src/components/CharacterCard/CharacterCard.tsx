import { type CharacterData } from "../../type";

interface CharacterCardProps {
  character: CharacterData;
}

const CharacterCard = ({
  character: { name, url, height, mass, created },
}: CharacterCardProps) => {
  return (
    <article className={`character ${name}`}>
      <h1 className="character__name"> {name} </h1>
      <img className="character__avatar" src={url} alt={name} />
      <span className="character__height"> {height}</span>
      <span className="character__mass">{mass}</span>
      <span className="character__creation-date"> {created}</span>
    </article>
  );
};

export default CharacterCard;

import { Results } from "../../interfaces/allCharacters";

interface CardProps {
  characters: Results[];
}

function Card({ characters }: CardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-11 gap-y-8 text-white py-10 px-2 my-4 mx-10">
      {characters.map((character: Results) => (
        <div
          className="bg-cardBackgroundColor relative rounded-md  border-borderColor hover:border-borderColorHover border-2 shadow-xl"
          key={character.id}
        >
          <div className="relative">
            <img
              className="rounded-full w-2/4 mx-auto -mt-2"
              src={character.image}
              alt={character.name}
            />
            <div className="p-4">
              <div>{character.name}</div>
              <small>{character.species}</small>
              <p>{character.origin.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;

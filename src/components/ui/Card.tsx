import { Results } from "../../interfaces/allCharacters"

interface CardProps {
    characters: Results[]
}
function Card({characters}: CardProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center my-6">
      {characters.map((character: Results) => (
              <div className="bg-cardBackgroundColor" key={character.id}>
                <img src={character.image} alt={character.name} />
                <div >{character.name}</div>
                <small>{character.species}</small>
                <p>{character.status}</p>
              </div>
            ))}
        </div>
  )
}

export default Card
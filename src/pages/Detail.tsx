import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllCharacterDetailsById } from "../services/characters";
import { DetailCharacter } from "../interfaces/allCharacters";

function Detail() {
  const { id } = useParams();
  const [characterDetails, setCharacterDetails] = useState<DetailCharacter>();



  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await getAllCharacterDetailsById(id);
        setCharacterDetails(response.data);
      } catch (error) {
        console.error("Error al obtener los detalles del personaje:", error);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  if (!characterDetails) {
    return <div>Cargando detalles del personaje...</div>;
  }


  return (
    <div className="bg-cardBackgroundColor p-6 rounded-lg shadow-md my-8 mx-auto max-w-screen-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <img
          src={characterDetails.image}
          alt={characterDetails.name}
          className="w-full rounded-full"
        />
        <div className="text-center sm:text-left text-white">
          <h1 className="text-4xl font-semibold text-black mb-4">{characterDetails.name}</h1>
          <p>Status: {characterDetails.status}</p>
          <p>
            <span>
              {characterDetails.species === "Human"
                ? "🟢"
                : characterDetails.species === "Alien"
                ? "🟣"
                : characterDetails.species === "Humanoid"
                ? "🟡"
                : characterDetails.species === "Animal"
                ? "🟤"
                : characterDetails.species === "Cronenberg"
                ? "⚫"
                : characterDetails.species === "Robot"
                ? "💿"
                : characterDetails.species === "Mythological Creature"
                ? "🌑"
                : characterDetails.species === "Disease"
                ? "🔵"
                : characterDetails.species === "unknown"
                ? "❓"
                : ""}{" "}
            </span>
            {characterDetails.species}
          </p>

          {characterDetails.type.length > 0 && <p>Tipo: {characterDetails.type}</p>}
          <p>Género: {characterDetails.gender}</p>
          <p>Orígen: {characterDetails.origin.name}</p>
          <p>Localización: {characterDetails.location.name}</p>
          <div className="mt-5">

          <Link to="/" className="bg-amber-300 py-1 px-2 rounded text-black">
            Atrás
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

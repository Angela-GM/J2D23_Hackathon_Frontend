import { useParams } from "react-router-dom";
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
    <div className="text-white flex flex-col sm:flex-row mt-10 justify-center gap-5">
      <img
        src={characterDetails.image}
        alt={characterDetails.name}
        className="w-1/3"
      />
      <div>
        <p>{characterDetails.name}</p>
        <p>{characterDetails.status}</p>
        <p>
          {" "}
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
          {characterDetails.species}
        </p>

        {characterDetails.type.length > 0 ? (
          <p>Tipo: {characterDetails.type}</p>
        ) : (
          <></>
        )}

        <p>Género: {characterDetails.gender}</p>
        <p>Orígen: {characterDetails.origin.name}</p>
        <p>Localización: {characterDetails.location.name}</p>

        {/* hacer que el botón vuelva a atràs */}
        <button className="bg-amber-300 py-1 px-2 rounded" value="Retroceder">
          Atrás
        </button>
      </div>
    </div>
  );
}

export default Detail;

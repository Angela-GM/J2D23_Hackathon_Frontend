import { useEffect, useState } from "react";
import { getAllCharacters } from "../services/characters";

function Main() {
  // Crear interface de allCharacters
  const [allCharacters, setAllCharacters] = useState([]);
  const [page, setPage] = useState(2);

  useEffect(() => {
    // llamada al servicio de api apiClient y guardar la informacion en allCharacters
    const fetchCharacters = async () => {
      try {
        const response = await getAllCharacters(page);
        const data = response.data;
        setAllCharacters(data.results);
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
      }
    };

    fetchCharacters();
  }, [page]);
  console.log(allCharacters);

  const hadleChangePage = () => {
    if (page <= 41) {
        setPage(page + 1);
      }
  };

  return (
    <div>
      <h1>Personajes</h1>
      <button onClick={hadleChangePage}>Muestra mas</button>
    </div>
  );
}

export default Main;

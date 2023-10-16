import { useEffect, useState } from "react";
import { getAllCharacters } from "../services/characters";
import { AllCharacters } from "../interfaces/allCharacters";

function Main() {
  // Crear interface de allCharacters
  const [allCharacters, setAllCharacters] = useState<AllCharacters>({
    info: {
      // count: 826, 
      // pages: 0, 
      next: "", 
      prev: "", 
    },
    results: [],
  });
  const [page, setPage] = useState(2);
  const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(() => {
    // llamada al servicio de api apiClient y guardar la informacion en allCharacters
    const fetchCharacters = async () => {
      try {
        const response = await getAllCharacters(page);
        const data = response.data;
        setAllCharacters(data);
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);
  console.log(allCharacters);

  const hadleChangePage = (e:React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.value === "Retroceder" && page > 1) {
      setPage(page - 1);
    } else if (e.currentTarget.value === "Avanzar" && page < 41) {
      setPage(page + 1);
    }
  };

  return (
    <main>
      <h1>Personajes</h1>

      {isLoading ? (
  <div>Loading...</div>
) : (
  <div>
    {allCharacters.results && allCharacters.results.map((character) => (
      <div key={character.id}>{character.name}</div>
    ))}
  </div>
)}

<div className="flex items-center gap-6 justify-center py-10">

      <button className="bg-amber-300 py-1 px-2 rounded" onClick={hadleChangePage} value="Retroceder">Retroceder</button>
      <button className="bg-amber-300 py-1 px-2 rounded" onClick={hadleChangePage} value="Avanzar">Avanzar</button>
</div>
    </main>
  );
}

export default Main;

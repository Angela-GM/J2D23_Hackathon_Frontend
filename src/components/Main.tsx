import { useEffect, useState } from "react";
import { getAllCharacters, searchCharacters } from "../services/characters";
import { AllCharacters } from "../interfaces/allCharacters";
import { Search } from "lucide-react";

function Main() {
  // Crear interface de allCharacters
  const [allCharacters, setAllCharacters] = useState<AllCharacters>({
    info: {
      next: "",
      prev: "",
    },
    results: [],
  });
  const [page, setPage] = useState(2);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    // llamada al servicio de api apiClient y guardar la informacion en allCharacters
    const fetchCharacters = async () => {
      try {
        let response;
        searchQuery === ""
          ? (response = await getAllCharacters(page))
          : (response = await searchCharacters(searchQuery));
        const data = response.data;
        setAllCharacters(data);
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [page, searchQuery]);
  console.log(allCharacters);

  const hadleChangePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.value === "Retroceder" && page > 1) {
      setPage(page - 1);
    } else if (e.currentTarget.value === "Avanzar" && page < 41) {
      setPage(page + 1);
    }
  };

  return (
    <main>
     <div className="relative">
  <div className="flex items-center">
    <input
      className="rounded py-1 px-2 flex-grow my-4 mx-10"
      type="text"
      value={searchQuery}
      onChange={handleSearchQuery}
      placeholder="Buscar personaje..."
    />
    <Search className="w-5" style={{ position: "absolute", right: "47px", top: "30%" }} />
  </div>
</div>


      <h1>Personajes</h1>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap gap-2"> 
          {allCharacters.results &&
            allCharacters.results.map((character) => (
              <div className="bg-cardBackgroundColor">
                <img src={character.image} alt={character.name} />
                <div key={character.id}>{character.name}</div>
                <small>{character.species}</small>
                <p>{character.status}</p>
                
              </div>
              
            
            ))}
        </div>
      )}

      <div className="flex items-center gap-6 justify-center py-10">
        <button
          className="bg-amber-300 py-1 px-2 rounded"
          onClick={hadleChangePage}
          value="Retroceder"
        >
          Retroceder
        </button>
        <button
          className="bg-amber-300 py-1 px-2 rounded"
          onClick={hadleChangePage}
          value="Avanzar"
        >
          Avanzar
        </button>
      </div>
    </main>
  );
}

export default Main;

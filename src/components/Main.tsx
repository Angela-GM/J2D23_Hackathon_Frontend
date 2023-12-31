import { useEffect, useState } from "react";
import { getAllCharacters, searchCharacters } from "../services/characters";
import { AllCharacters } from "../interfaces/allCharacters";
import { ChevronLeftCircle, ChevronRightCircle, Search } from "lucide-react";
import Card from "./ui/Card";

function Main() {
  // Crear interface de allCharacters
  const [allCharacters, setAllCharacters] = useState<AllCharacters>({
    info: {
      next: "",
      prev: "",
      pages: 0,
    },
    results: [],
  });
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setPage(1);
  };

  useEffect(() => {
    // llamada al servicio de api apiClient y guardar la informacion en allCharacters
    const fetchCharacters = async () => {
      try {
        let response;
        searchQuery === ""
          ? (response = await getAllCharacters(page))
          : (response = await searchCharacters(searchQuery, page.toString()));
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
    if (page != allCharacters.info.pages) {
      if (e.currentTarget.value === "Retroceder" && page > 1) {
        setPage(page - 1);
      } else if (e.currentTarget.value === "Avanzar" && page < 41) {
        setPage(page + 1);
      }
    } else {
      if (e.currentTarget.value === "Retroceder" && page > 1) {
        setPage(page - 1);
      } else {
        console.log("no hay mas páginas");
      }
    }
  };

  return (
    <main>
      <div className="relative">
        <div className="flex items-center">
          <input
            className="rounded-2xl py-2 px-4 flex-grow my-4 mx-12 bg-cardBackgroundColor text-white placeholder:text-green-200
            "
            type="text"
            value={searchQuery}
            onChange={handleSearchQuery}
            placeholder="Buscar personaje..."
          />
          <Search
            className="w-5 text-green-200"
            style={{ position: "absolute", right: "60px", top: "30%" }}
          />
        </div>
        <div></div>
      </div>

      <h1 className="text-white font-bold text-3xl text-start px-2 flex-grow my-4 mx-10">
        Lista de personajes
      </h1>

      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <Card characters={allCharacters.results} />
      )}

      <div className="flex flex-col items-center md:flex-row gap-6 justify-center py-10 text-xs md:text-sm">
        <div className="flex gap-2 items-center">
          <button
            className="bg-amber-300 py-1 px-2 rounded"
            onClick={hadleChangePage}
            value="Retroceder"
          >
            <ChevronLeftCircle />
          </button>
          <p className="text-white">
            Página {page} de {allCharacters.info.pages}
          </p>
          <button
            className="bg-amber-300 py-1 px-2 rounded"
            onClick={hadleChangePage}
            value="Avanzar"
          >
            <ChevronRightCircle />
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllCharacterDetailsById } from '../services/characters';

function Detail() {
  const { id } = useParams();
  const [characterDetails, setCharacterDetails] = useState(null);

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
    <div>
      <h2>Detalles del personaje con ID {id}</h2>

     
    </div>
  );
}

export default Detail;

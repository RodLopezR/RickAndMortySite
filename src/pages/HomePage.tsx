import { useEffect } from 'react';
import { GetCharacterByIdService } from '../services/RickAndMortyServices';

const HomePage = () => {
  useEffect(() => {
    (async () => {
      const oResponse = await GetCharacterByIdService(1);
      console.log(oResponse);
    })();
  }, []);

  return <div>Hola mundo</div>;
};

export default HomePage;

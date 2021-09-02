import { Fragment, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Footer from '../components/Footer';
import Header from '../components/Header';
import FormView from '../components/FormView';
import CharacterListView from '../components/CharacterListView';
import { GetCharactersService } from '../services/RickAndMortyServices';
import ServiceStateType, { InitialState } from '../types/ServiceStateType';
import Styles from './HomePage.module.scss';
import LoadingComponent from '../components/LoadingComponent';

const HomePage = () => {
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState<any>({ name: '', status: '' });
  const [service, setService] = useState<ServiceStateType>(InitialState);

  useEffect(() => {
    setPage(1);
  }, [filter]);

  useEffect(() => {
    setService(InitialState);
    (async () => {
      try {
        const oResponse = await GetCharactersService({
          page,
          name: filter.name,
          status: filter.status,
        });
        setService({ ...InitialState, loading: false, data: oResponse });
      } catch (e) {
        setService({
          ...InitialState,
          error: true,
          errorMessage: 'Falló algo',
        });
      }
    })();
  }, [page, filter]);

  const handleChange = (name: string, status: string) => {
    if (name === filter.name && status === filter.status) return;
    setFilter({ name, status });
  };

  return (
    <Fragment>
      <Header />
      <Container>
        <Grid container>
          <FormView
            disabled={service.loading && !service.error}
            onChangeForm={handleChange}
          />
        </Grid>
        <Grid container className={Styles.main__container}>
          {service.error ? (
            <div>Error</div>
          ) : !service.loading && service.data ? (
            <CharacterListView
              service={service.data}
              changePage={setPage}
              page={page}
            />
          ) : (
            <LoadingComponent />
          )}
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default HomePage;

import { Grid } from '@material-ui/core';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import Pagination from '@material-ui/lab/Pagination';

import CharacterView from '../CharacterView';
import CharacterType from '../../types/Character';
import CharacterListType from '../../types/CharacterListType';
import Styles from './CharacterListView.module.scss';

interface CharacterListViewProps {
  service: CharacterListType;
  changePage: Dispatch<SetStateAction<number>>;
  page: number;
}

const CharacterListView: FunctionComponent<CharacterListViewProps> = ({
  service,
  changePage,
  page,
}) => {
  const handlePageChange = (_: any, page: number) => {
    changePage(page);
  };

  return (
    <Grid container>
      <Grid item xs={12} className={Styles.info}>
        Total de resultados <strong>{service.info.count}</strong>, paginas{' '}
        <strong>{service.info.pages}</strong>, página actual{' '}
        <strong>{page}</strong>.
      </Grid>
      {service.results.map((item: CharacterType, index: number) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={item.id}>
          <CharacterView character={item} />
        </Grid>
      ))}
      <Grid item xs={12} className={Styles.pagination}>
        <Pagination
          count={service.info.pages}
          page={page}
          hidePrevButton
          hideNextButton
          onChange={handlePageChange}
        />
      </Grid>
    </Grid>
  );
};

export default CharacterListView;

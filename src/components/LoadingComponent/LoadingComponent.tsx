import Styles from './LoadingComponent.module.scss';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingComponent = () => {
  return (
    <Grid item xs={12} className={Styles.loading}>
      <CircularProgress className={Styles.circularProgress} color="secondary" />
      <div>Cargando resultados</div>
    </Grid>
  );
};

export default LoadingComponent;

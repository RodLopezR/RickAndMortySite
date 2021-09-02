import { Grid } from '@material-ui/core';
import Styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <Grid container>
        <Grid item xs={12} lg={11} className={Styles.content}>
          <div>Proyecto desarrollado con ReactJS, SASS, TypeScript.</div>
          <div>
            Desarrollado por{' '}
            <a href="https://rodlopezr.github.io/" target="_blank">
              Rodrigo López
            </a>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';

import Styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={Styles.header}>
      <AppBar
        color="primary"
        style={{ backgroundImage: `url(./images/background_header.jpg)` }}
      >
        <div className={Styles.shadow} />
        <Container className={Styles.header__container}>
          <img
            src="./images/logo_header.png"
            alt="rick and morty"
            className={Styles.logo}
          />
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;

import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import Theme from '../utils/Theme';
import AppRouter from './AppRouter';
import '../sass/global/index.scss';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Fragment>
        <CssBaseline />
        <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
          <AppRouter />
        </BrowserRouter>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;

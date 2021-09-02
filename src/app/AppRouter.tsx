import { Switch, Route, Redirect } from 'react-router-dom';
import AppRoutes from '../constants/AppRoutes';
import HomePage from '../pages/HomePage';

const AppRouter = () => (
  <Switch>
    <Route path={AppRoutes.Home} exact>
      <HomePage />
    </Route>
    <Redirect to={AppRoutes.Home} />
  </Switch>
);

export default AppRouter;

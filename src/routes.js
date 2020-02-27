import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login/Login';
import CreateAccount from './pages/CreateAccount/CreateAccount';

const Routes = createAppContainer(
  createSwitchNavigator({
    Sign: createSwitchNavigator({
      Login,
      CreateAccount,
    }),
  }),
);

export default Routes;

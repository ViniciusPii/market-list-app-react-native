import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Login from './pages/Login/Login';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Home from './pages/Home/Home';
import NewItem from './pages/NewItem/NewItem';
import {colors} from './components/colors';

const Routes = createAppContainer(
  createSwitchNavigator({
    App: createBottomTabNavigator(
      {NewItem, Home},
      {
        tabBarOptions: {
          showLabel: false,
          activeTintColor: `${colors.white}`,
          inactiveTintColor: `${colors.disableCian}`,
          style: {
            backgroundColor: `${colors.cianBlue}`,
            height: 60,
            borderTopColor: 'transparent',
          },
        },
      },
    ),
    Sign: createSwitchNavigator({
      Login,
      CreateAccount,
    }),
  }),
);

export default Routes;

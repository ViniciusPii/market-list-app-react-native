import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Preload from './components/Preload';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';
import NewItem from './pages/NewItem';

import {colors} from './components/colors';

const Routes = createAppContainer(
  createSwitchNavigator({
    Sign: createSwitchNavigator({
      Preload,
      Login,
      CreateAccount,
    }),
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
  }),
);

export default Routes;

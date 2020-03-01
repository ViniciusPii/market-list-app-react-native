import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Login from './pages/Login/Login';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Home from './pages/Home/Home';
import NewItem from './pages/NewItem/NewItem';

const Routes = createAppContainer(
  createSwitchNavigator({
    App: createBottomTabNavigator(
      {Home, NewItem},
      {
        tabBarOptions: {
          showLabel: false,
          activeTintColor: '#fff',
          inactiveTintColor: '#A7D2FF',
          style: {
            backgroundColor: '#6FB5FF',
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

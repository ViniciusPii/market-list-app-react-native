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
          inactiveTintColor: '#FFB2DA',
          style: {
            backgroundColor: '#FF89C6',
            height: 60,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
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

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import RotasSearch from './RotasSearch';
import RotasProfile from './RotasProfile';
import Home from './Home';

const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={RotasSearch}
        options={{
          tabBarIcon: () => (
            <AntDesign name="search1" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={RotasProfile}
        options={{
          tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
}

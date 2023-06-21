import { createStackNavigator } from '@react-navigation/stack';

import Search from './Search';
import Anime from '../Search/Anime';
import Draw from '../Search/Draw';
import Memes from '../Search/Memes';

const Stack = createStackNavigator();

export default function RotasSearch() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        options={{ headerShown: false }}
        component={Search}
      />
      <Stack.Screen name="Anime" component={Anime} />
      <Stack.Screen name="Draw" component={Draw} />
      <Stack.Screen name="Memes" component={Memes} />
    </Stack.Navigator>
  );
}

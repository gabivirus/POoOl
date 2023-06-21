import { createStackNavigator } from '@react-navigation/stack';

import Profile from './Profile';
import Night from '../Profile/Night';
import Forest from '../Profile/Forest';

const Stack = createStackNavigator();

export default function RotasProfile() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={Profile}
      />
      <Stack.Screen name="Night" component={Night} />
      <Stack.Screen name="Forest" component={Forest} />
    </Stack.Navigator>
  );
}

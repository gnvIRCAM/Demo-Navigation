import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/HomeScreen';
import OtherScreen from './components/OtherScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  // Définition de la pile d'écrans
  const Stack = createNativeStackNavigator(); 
  return (
    // Logique de navigation dans l'application
    <NavigationContainer> 
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Other' component={OtherScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

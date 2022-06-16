import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Login from './screens/login';
import WaitingLogin from './screens/waitinglogin';
import BookList from './screens/booklist';
import BookDetails from './screens/booldetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="WaitingLogin" component={WaitingLogin} />
    </Stack.Navigator>
  );
}

function Details() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BookList" component={BookList} />
      <Stack.Screen name="BookDetails" component={BookDetails} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: '#6200EE',
        tabBarInactiveBackgroundColor: '#6200EE',
      }}>
        <Tab.Screen 
          name="Books" 
          component={Details} 
          options={{ 
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book-open-variant" color='#FFFFFF' size={size} />
            ),}}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ 
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-circle-outline" color='#FFFFFF' size={size} />
            ),
          }}
        />
      </Tab.Navigator>      
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-community/google-signin';
import HomeScreen from '../screens/HomeScreen';



const Stack = createStackNavigator();

function MyStack(props) {
    
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  
    GoogleSignin.configure({
      webClientId: '116428879290-uoqgftuhs746dvlsar3r7o3la6tfcd27.apps.googleusercontent.com',
    });
  
  }, []);
    return (
        <Stack.Navigator initialRouteName="LoginPage" screenOptions={{ headerShown: false}}>
           
            <Stack.Screen  name="LoginPage" component={LoginScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            
        </Stack.Navigator>
    )
}





const MainRoute = props => {

    return (
        <NavigationContainer>
           <MyStack />
        </NavigationContainer>
    );
};

export default MainRoute;
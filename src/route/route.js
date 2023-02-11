import React, { useRef, useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from "./styles";
import { store } from "../redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {SET_SIGNIN, SET_SIGNOUT} from "../redux/declarationTypes/authDecleration";

import Splash from "../screens/splash/splash";
import SignUp from "../screens/signup/signup";
import SignIn from "../screens/signin/signin";

import CreateDriver from "../screens/drivers/createDriver/createDriver";
import ListDrivers from "../screens/drivers/listDrivers/listDrivers";
import UpdateDriver from "../screens/drivers/updateDriver/updateDriver";
import ListPassengers from "../screens/passenger/listPassengers/listPassengers";


const Stack = createStackNavigator();



function MainRouter() {
  
  const [loadingSplash, setLoadingSplash] = React.useState(true)
  const Dispatch = useDispatch()
  const isSignedIn = useSelector((state) => state?.AuthReducer?.auth?.isSignedIn);

  useEffect(()=>{

    async function checkLoginStatus(){
      let isUserLoggedIn = await AsyncStorage.getItem('userLoggedIn')
      if (isUserLoggedIn !== null && isUserLoggedIn !== undefined && isUserLoggedIn === 'yes') {
        Dispatch({ type: SET_SIGNIN })
      }
    }
    async function loading(){
      setTimeout(async function(){
        setLoadingSplash(false)
      }, 3000)
    }
    checkLoginStatus()
    loading()

  }, []);
  

  if(loadingSplash){
    return <Splash/>
  }

  return <NavigationContainer >
          <Stack.Navigator>
            {isSignedIn?
            <>
              <Stack.Screen 
                name="ListDrivers" 
                component={ListDrivers} 
                options={({ navigation, route }) => ({
                  title:'Drivers',
                  headerRight: () => (
                    <View style={styles.btnView}>
                      <TouchableOpacity 
                        style={styles.passBtnStyle}
                        onPress={async()=>{
                          navigation.navigate('ListPassengers')
                        }}>
                        <Text style={styles.btnTxt}>Passengers</Text>
                      </TouchableOpacity>
                      <TouchableOpacity 
                        style={styles.btnStyle}
                        onPress={async()=>{
                          await AsyncStorage.clear()
                          Dispatch({ type: SET_SIGNOUT })
                        }}>
                        <Text style={styles.btnTxt}>Log out</Text>
                      </TouchableOpacity>
                    </View>
                  ),
                })}
              />
              <Stack.Screen name="ListPassengers" component={ListPassengers} options={({ navigation, route }) => ({title:'Passengers'})}/>
              <Stack.Screen name="CreateDriver" component={CreateDriver} options={({ navigation, route }) => ({title:'Add Driver'})}/>
              <Stack.Screen name="UpdateDriver" component={UpdateDriver} options={({ navigation, route }) => ({title:'Update Driver'})}/>

              
            </>  
            :
            <>
              <Stack.Screen name="SignUp" component={SignUp}/>
              <Stack.Screen name="SignIn" component={SignIn}/>
            </>
            }
            
          </Stack.Navigator>
        </NavigationContainer>
    
}


function Router() {
  return (
    <Provider store={store}>
        <MainRouter />
    </Provider>
  );
}

export default Router;
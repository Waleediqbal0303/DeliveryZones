import React, { useRef, useEffect, useState } from "react";


import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from "../screens/splash/splash";
import Browse from "../screens/browse/browse";

const Stack = createStackNavigator();



function MainRouter() {
  return <NavigationContainer >
          <Stack.Navigator headerMode="none" >
            
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Browse" component={Browse}/>
            
            
            

          </Stack.Navigator>
        </NavigationContainer>
    
}

export default MainRouter;
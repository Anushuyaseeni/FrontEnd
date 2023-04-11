import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {Signin} from '../components/auth/signin';

const DrawerStack = createDrawerNavigator();

const DrawerStackScreen = () => {
    return (
        <DrawerStack.Navigator>
            <DrawerStack.Screen name='signin' component={Signin}/>
        </DrawerStack.Navigator>
    )
}

export default DrawerStackScreen;
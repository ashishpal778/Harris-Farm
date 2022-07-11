import React from "react";
import List from "./src/Componrnts/List";
import Detail from "./src/Componrnts/Detail";
import Cart from "./src/Componrnts/Cart";
import Orders from "./src/Componrnts/Orders";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import store from "./src/store";
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator()

class Router extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="List" >
                    <Stack.Screen options={{headerShown:false}} name="List"  component={List} />
                    <Stack.Screen  name="Detail" component={Detail} />
                    <Stack.Screen options={{headerShown:false}} name="Cart"   component={Cart} />
                    <Stack.Screen options={{headerShown :false}} name="Orders" component={Orders} />                   
                </Stack.Navigator>
            </NavigationContainer>
            </Provider>

        )
    }
} 
export default Router;
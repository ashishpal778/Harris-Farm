import React from "react";
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import {useSelector,useDispatch} from "react-redux"
// import {increment} from "../actions/listAction"
import {increment,decrement} from '../reducers/cartReducer'

const Detail = ({navigation}) =>{
    const myState = useSelector((state)=>state.detail.value)
    const dispatch = useDispatch()
        return(
            <View>
             <Text>{myState}</Text> 
            <TouchableOpacity onPress={()=>dispatch(increment()) }>
                <Text style={{fontSize:30, color:'red'}}> Plus Number Button </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Cart") }>
                <Text style={{fontSize:30, color:'red'}}>  Go to Cart </Text>
            </TouchableOpacity>
            <Text style={{fontSize:30, color:'red'}}> {myState}</Text>
            </View>
        )
    
}
export default Detail
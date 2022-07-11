import React, { useState } from "react";
import {View, Text,StyleSheet,TouchableOpacity,Image,FlatList} from 'react-native';
import {useSelector,useDispatch} from 'react-redux'
import { decrement } from "../reducers/cartReducer";
const Cart = ({navigation})=>{
       const myState = useSelector((state)=>state.detail)
    //    const [underlineVisibilty ,setUnderline] = useState()
    // console.log('Cart here')
    // console.log(myState.value)
    const dispatch = useDispatch()
        return(
            <View style={{flex:1}}>
                <View style={{flex :1.70 ,backgroundColor:'white'}}>
                    <View style={{flex:1}}>
                        <View style={{flex :2 ,backgroundColor:'white'}}>
                            <View style={{margin:15}}><TouchableOpacity onPress={()=>navigation.navigate('List')}>
                                <Image style={{width:20,height:20}} source={require('../Assets/Vector.png')}></Image>
                                </TouchableOpacity></View>
                        </View>
                        <View style={{flex :2 ,backgroundColor:'white'}}>
                            <View style={{flexDirection:'row', justifyContent:'space-between',margin:15}}>
                                <View style={{backgroundColor:'white',width:'50%'}}>
                                   <TouchableOpacity>
                                   <View style={{alignItems:'center'}}>
                                    <Text style={{color:'black'}}>Cart</Text>  
                                    <View style={{width:'100%',height:2 , backgroundColor:'black',marginTop:5}}></View> 
                                    </View>
                                   </TouchableOpacity>
                                </View>
                                
                                <View style={{backgroundColor:'white',width:'50%'}}>
                                    <View style={{alignItems:'center'}}>
                                    <Text style={{color:'black'}}>Past Orders</Text>  
                                    <View  style={{display:'none', width:'100%',height:2 , backgroundColor:'black',marginTop:5}}></View> 
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{flex :2 ,backgroundColor:'white'}}>
                            <View style={{flexDirection:'row', justifyContent:"space-between", margin:15}}>
                                <View>
                                   <Text style={{color:'black',fontWeight:'bold',fontSize:18}}>My Cart</Text> 
                                </View>
                                <View>
                                   <TouchableOpacity onPress={()=>dispatch({type:decrement})}>
                                       <Text style={{color:'green'}}>Clear All</Text> 
                                   </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                
                <View style={{flex :4 ,backgroundColor:'white'}}>
                    <View>
                        {/* {console.log(myState)} */}
                        <FlatList data ={myState.value} renderItem ={(item)=>
                        <View>
                            <View style={{width:'100%',height:90, backgroundColor:'white'}}>
                                <View style={{flexDirection:'row' ,margin:5}}>
                                    <View style={{width:60}}><Image style={{width:40,height:40, borderRadius:40}} source={item.item.img}></Image></View>
                                    <View>
                                        <View><Text>${item.item.price}</Text></View>
                                        <View><Text>{item.item.fruitName}</Text></View>
                                        <View><Text>{item.item.detail}</Text></View>
                                    </View>
                                    {/* <View> 
                                        <View><Text>hello</Text></View>
                                    </View> */}
                                </View>
                                <View style={{flexDirection:'row' ,marginLeft:65}}>
                                    <Image style={{marginTop:5,width:12,height:12}} source={require('../Assets/pen.png')}></Image> 
                                    <Text style={{marginLeft:15,}}>Preferences</Text>
                                </View>
                                
                            </View>
                            <View style={{height:.5,backgroundColor:'gray'}}></View>
                            </View>
                        }>

                        </FlatList>
                    </View>
                    
                </View>
                
                <View style={{flex :.70 ,backgroundColor:'white'}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between',margin:12}}>
                        <View >
                            <Text>Items</Text>
                            <Text>${}</Text>
                        </View>
                        <TouchableOpacity onPress={()=>navigation.navigate('Orders')}>
                        <View style={{backgroundColor:'green',width:200, height:40,borderRadius:20, justifyContent:'center',alignItems:'center',}}>
                            <Text style={{color:'white'}}>Confirm</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    
}
export default Cart
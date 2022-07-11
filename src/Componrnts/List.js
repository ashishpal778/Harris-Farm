import React,{useState} from "react";
import {View, Text,StyleSheet,TouchableOpacity,Image, FlatList, ImageBackground, TextInput,Modal,Pressable, ScrollView} from 'react-native';
import {useSelector,useDispatch} from "react-redux"
import {fruitCategory,fruitImages} from "../Config/data";
// import {increment,decrement} from '../reducers/listReducer'
import {increment,decrement } from '../reducers/cartReducer'

console.log("ashish");
const List = ({navigation})=>  {
        const myState = useSelector((state)=>state.count)
        // console.log(myState.fruitImages[0].modalImage)
        const dispatch = useDispatch()
        const [state, setState]=useState('Fruit')
        const [modalVisible, setModalVisible] = useState(false);
        const [modalItem,setModalItem]=useState([{modalimg:require('../Assets/tomato.png')},{modalimg:require('../Assets/image3.png')},{modalimg:require('../Assets/tomato.png')}])
        
        return(
            <View style={{flex :1 , backgroundColor :'white'}}>
                <View style={{flex :.3 ,}}>
                    
                         <ImageBackground style={ {width:'100%' ,height:'100%' }} source ={require('../Assets/header.png')}>
                <View style={{flex:1,marginTop:5}}>
                    <View style={{flex:1, backgroundColor:'Green', flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flex:.8}}>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} >
                            <Image source={require('../Assets/Vector.png')} style={{width:"20%",height:"30%",margin:'10%'}}></Image>
                            </TouchableOpacity> 
                        </View>
                        <View style={{flex:1.2}}>
                            <Image source={require('../Assets/harris.png')} style={{width:'80%',height:'85%',margin:'10%'}}></Image>
                        </View>
                        <View style={{flex:.8}}>
                            <Image resizeMode="stretch" source={require('../Assets/follow.png')} style={{width:"70%",height:"50%",margin:'10%'}}></Image>
                        </View>
                    </View>
                    <View style={{flex:1, alignItems:'center',marginTop:5}}>
                        <Text style={{color:"white"}}>Harrise Form Markets</Text>
                        <Text style={{color:"white"}}>Castle Hill, Sydney</Text>
                        <Text style={{color:"white", textDecorationLine:"underline"}}>View Info</Text>
                    </View>
                    <View style={{flex:1, alignItems:'center'}}>
                        <TextInput placeholder="Search Harrise Farm Markets..." style={{marginTop:'4%',paddingLeft:'5%',borderRadius:22,width:'90%',height:'60%',backgroundColor:"white",color:'black'}}></TextInput>
                    </View>
                </View>
                </ImageBackground>
          
             
                </View >
                <View style={{flex :.7 , backgroundColor :'white'}}>
                    <View style={{flex :.1 , backgroundColor :'white'}}>
                    {console.log(myState.fruitCategory)}
                        <FlatList 
                        horizontal pagingEnabled 
                        data = {myState.fruitCategory} 
                     
                        renderItem={({item})=>
                        <TouchableOpacity onPress={()=>setState(item.fruitCat)} >
                            <View style={styles.fruitCategoryView}>
                                <Text style={{paddingLeft:9,paddingTop:7,paddingRight:9,fontSize:16,color:'black'}}>{item.fruitCat}</Text>
                            </View>
                            </TouchableOpacity>
                        }>
                        </FlatList>

                    </View>
                    <View style={{flex :.1 , backgroundColor :'white', flexDirection:'row', justifyContent:'space-between',}}>
                        <View>
                            <Text style={{margin:6,fontSize:18,fontWeight:'bold', color:'black'}}> {state} </Text>
                        </View>
                        <View>
                            <Text style={{padding:7, margin:5 , color:'black'}}> Filter and sort</Text>
                        </View>
                    </View>
                    <View style={{flex :.9 ,padding:'1%' ,backgroundColor :'gray'}}>
                    {/* {console.log(myState.fruitImages)} */}
                        <FlatList  
                          numColumns={2}   
                          data={myState.fruitImages} 
                     
                          renderItem={({item})=>
                            <View style={styles.fruitImageView}>
                                <TouchableOpacity  onPress={() => { setModalVisible(true)
                                
                                }}>
                                    <Image resizeMode = "stretch" style={styles.fruitImage} source={item.img}></Image>
                                </TouchableOpacity>                           
                                <View style={{flex:1, margin:'4%'}} >
                                    <View style={{flex:.5}} >                                       
                                        <Text style={{fontSize:14,color:'black'}}>{item.fruitName}</Text>
                                    </View>
                                    <View style={{ flex:.56,flexDirection:'row'}}>
                                      <Text style={{fontSize:17, fontWeight:'bold',marginRight:'4%',color:'black'}}>${item.price}</Text>
                                      <Text style={{color:'black'}}>{item.pricePerKG}</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <TouchableOpacity onPress={()=> dispatch({type:increment,payload:item})}>
                                            {/* {console.log('addButton')} */}
                                            <Image source={item.addButton} style={{width:'100%',height:30,borderRadius:15,marginTop:'3%'}} ></Image> 
                                         </TouchableOpacity>  
                                    </View> 
                                </View> 
                              
                            </View>} >                               
                        </FlatList>                                          
                    </View>
                </View>
                <View>
                                  <Modal
                                      animationType="slide"
                                      transparent={true}
                                      visible={modalVisible}
                                      onRequestClose={() => {
                                      // Alert.alert("Modal has been closed.");
                                      setModalVisible(!modalVisible);
                                      }}
                                      >
                                      <View style={styles.centeredView}>
                                      <View style={styles.modalView}>
                                          <View style={{flex:1,borderTopLeftRadius:20}}>
                                              <View style={{flex:.7,backgroundColor:'white',borderTopLeftRadius:20 ,borderTopRightRadius:20}}>
                                              { console.log(modalItem)}
                                                
                                                          <View>
                                                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                                            <Image style={{width:'100%',height:'100%', borderTopLeftRadius:20,borderTopRightRadius:20}} source={require('../Assets/tomato.png')}></Image>
                                                            </TouchableOpacity>
                                                            </View>
                                                       
                                                  
                                                  </View>
                                                  <View style={{flex:1}}>
                                                      <View>
                                                        <ScrollView>
                                                            <View style={{margin:10}}>
                                                                <View>
                                                                    <Text style={{color:'black',fontWeight:'bold', fontSize:20}}>Tomatoes Vine </Text>
                                                                </View>
                                                                <View>
                                                                    <Text style={{color:'black',fontWeight:'bold', fontSize:20}}>Large (min 500g) </Text>
                                                                </View>
                                                                <View style={{flexDirection:'row',marginTop:10}}>
                                                                    <Text style={{color:'gray'}}>sold by: </Text>
                                                                    <Image source={require('../Assets/logo.png')} style={{width:30, height:23}}></Image>
                                                                    <Text style={{color:'black' , textDecorationLine:'underline', marginLeft:5}}>Harrise Farm Markets</Text>
                                                                </View>
                                                                <View style={{flexDirection:'row',marginTop:8}}>
                                                                    <Text style={{color:'gray'}}>Status:  </Text>
                                                                    <Text style={{color:'green'}}>In Stock </Text>
                                                                </View>
                                                                <View style={{flexDirection:'row',marginTop:8}}>
                                                                    <Text style={{color:'gray'}}>Categoies:  </Text>
                                                                    <Text style={{color:'black'}}>Vegetables </Text>
                                                                </View>
                                                                <View style={{marginTop:20, flexDirection:'row'}}>
                                                                    <Text style={{color:'black', fontWeight:'bold'}}>$2.50  </Text>
                                                                    <Text style={{color:'gray'}}>/item </Text>
                                                                </View>
                                                                <View>
                                                                    <Text  style={{marginTop:20 }}>Information</Text>
                                                                    <View style={{height:1, backgroundColor:'gray'}}></View>
                                                                    <Text>Alequam loream ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisue returm. Anean imperdiet. Etiam ultricaes nisi vel augue</Text>
                                                                </View>
                                                            </View>
                                                        </ScrollView>
                                                      </View>
                                                     
                                                  </View>
                                                  <View style={{flex:.22,backgroundColor:'white',shadowColor:'gray'}}>
                                                     <View style={{flexDirection:'row',justifyContent:"space-between",margin:8,}}>
                                                          <View >
                                                              <Text>2 Items</Text>
                                                              <Text style={{color:'black', fontWeight:'bold'}}>$100.00</Text>
                                                          </View>
                                                          <View>
                                                              <TouchableOpacity onPress={()=>{navigation.navigate('Cart') ,setModalVisible(!modalVisible)}}>
                                                              <View style={{padding:8,borderRadius:35,width:130,height:40,backgroundColor:'green',alignItems:'center'}}>
                                                              <Text style={{color:'white'}}>GO TO CART</Text>
                                                              </View>
                                                              </TouchableOpacity>
                                                          </View>
                                                     </View>
                                                  </View>
                                                          </View>
                                                      </View>
                                                      </View>
                                                  </Modal>
                                  </View>
               
            </View>
    
        )
    
}
const styles = StyleSheet.create({
fruitCategoryView:{
    backgroundColor:"#43B028",
    margin:6,
    borderRadius: 30,
    // padding:'2%',
    // width:,
    height:'80%'
},
fruitImageView:{
    width: '48%',
    height: 150,
    // padding:2,
    margin:'1%',
    backgroundColor:"white",
    // flex:1


    
},
fruitImage:{
    width: '100%',
    height:60,
    
    
},
centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
    // marginTop: 22
  },
  modalView: {
    // marginTop: '15%',
    width:'100%',
    height:'85%',
    backgroundColor: "white",
    borderRadius: 20,
    // padding:5,
    // justifyContent:"center",
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,

    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})
export default List
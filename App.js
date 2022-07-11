import React from 'react';
import {View,StyleSheet ,Text,Image,FlatList,TouchableOpacity,TextInput} from 'react-native'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      largeImg:this.imgArray[0].imgId,
      inpurField:''
    }
  }

  imgArray =[{
    imgId:'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
  },
  {
    imgId:'https://cdn.statusqueen.com/mobilewallpaper/thumbnail/mobile_wallpaper43-528.jpg'
  },
  {
    imgId:'https://www.mordeo.org/files/uploads/2020/07/Cyberpunk-Edgerunners-4K-Ultra-HD-Mobile-Wallpaper-scaled.jpg'
  },
  {
    imgId:'https://cdn.wallpapersafari.com/16/69/rcj6Cz.jpg'
  },
  {
    imgId:'https://wallpaperaccess.com/full/5354504.gif'
  },
  {
    imgId:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6U4BAKgTNhFcrO4GXGK1otOB5bOd7EsdhHA&usqp=CAU'
  },
  {
    imgId:'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW9iaWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
  },
  {
    imgId:'https://w0.peakpx.com/wallpaper/870/809/HD-wallpaper-love-hamra-hearts-hearts-love-pink-red-you.jpg'
  },
  {
    imgId:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqaFSMHevxbk_84ABlymrkH2cdT4T0k86ngw&usqp=CAU'
  },
  {
    imgId:'https://images.unsplash.com/photo-1628707351135-e963f2aa4387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhbGxwYXBlciUyMGZvciUyMG1vYmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
  },
] 
  render(){
   console.log(this.state.inpurField)
    return(
      <View style={{flex:1}}>
        <View style={{flex:4}}>
         <TextInput placeholder='Enter your Name'  onChangeText={(value)=>{this.setState({inpurField:value})}}></TextInput> 
        <Text style={styles.font} >{this.state.inpurField}</Text>
        <Image style={[ styles.img, {width:"100%"}  ]} source ={{uri:this.state.largeImg}}></Image>
        </View>
        <View style={{flex:1}}>
          <FlatList  horizontal
        pagingEnabled  data={this.imgArray} renderItem={({item})=><View><TouchableOpacity onPress={()=>this.setState({largeImg:item.imgId})}><Image style={styles.img} source={{uri:item.imgId}}></Image></TouchableOpacity></View>}>

          </FlatList>
        {/* <Image style={styles.img}source ={{uri:'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'}}></Image> */}
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  font :{fontSize:38,
         color:'blue' },
  img:{width:160,height:'100%', margin:1}

})
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;

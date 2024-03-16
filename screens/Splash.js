import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const Splash = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('Home')
}
  const onPress2 = () => {
  navigation.navigate('About')
}

 return (
   <View style={{ height: "100%", alignItems: "center", backgroundColor: "#0CA7FF" }}>
     <View style={style.top}>
       <Image source={require('../img/lru.png')} style={style.imageLogo} />
     </View>
     <View style={{ flex: 0.10, justifyContent: "center" }}>
       <Text style={{ color: "black", fontSize: 24 }}>สมุนไพรท้องถิ่นไทเลย</Text>
     </View>
     <View style={{ flex: 0.45, justifyContent: "center" }}>
         <Image source={require('../img/cover_01.jpg')} style={{ width: 390, height: 190, borderRadius: 10 }} />
     </View>
     <View style={{flex: 0.25, flexDirection: "row"}}>
      <Pressable onPress={onPress}>
        <Image source={require('../img/herbs-spices-set.jpg')} style={style.image120} />
      </Pressable>
      <Pressable onPress={onPress2}>
       <Image source={require('../img/aloe.jpg')} style={style.image120} />
      </Pressable>
       <Image source={require('../img/farmers.jpg')} style={style.image120} />
     </View>

     <View style={{ flex: 0.15 }}>
      <Text style={{ color: "black", fontSize: 18 }}>มหาวิทยาลัยราชภัฏเลย</Text>
     </View>
   </View>
 )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 0,
    margin: 10,
  },
  top: {
    flex: 0.45, 
    justifyContent: "center",
  },
  imageLogo: {
    width: 120, 
    height: 158,
  },
  image120: {
    width: 120, 
    height: 100, 
    marginRight: 10, 
    borderRadius: 10,
  }
});

export default Splash
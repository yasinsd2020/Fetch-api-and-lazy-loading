import { View, Text, Image, ScrollView, TextInput } from "react-native";

// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/FontAwesome";

import React from "react";


const Navbars = () => {
  return (
   <>
      <View style={{ display: "flex",flexDirection:'row', justifyContent: "space-around" ,
    alignItems:'center',  height:'10%',
        backgroundColor: '#EEEEEE',   }}>
        <Icon name="bars" size={30} />
        <View>
          <Image
            source={{
              uri: "https://www.hourlyrooms.co.in/uploads/0000/1/2021/11/19/logo-3.png",
            }}
            style={{ width: 120, height: 100, resizeMode: "contain" }}
          />
        </View>
        <View>
          <Icon name="bell" size={30} />
        </View>
      </View>
      <search />
      </>
  );
};

export default Navbars;

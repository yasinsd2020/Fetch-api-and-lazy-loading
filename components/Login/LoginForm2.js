import { View, TextInput, TouchableOpacity , Image ,Text} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";
const LoginForm2 = () => {
  const [showPassword, setShowPassword] = useState(true);

  const onSubmit = () => {
    console.log("sdsdsds");
  };

  return (
    <>
      <View style={{fontFamily: 'Rubik, sans-serif'}}>
        <View style={{marginTop:'7rem', justifyContent:'center',alignItems:'center'}}>
        <Image
            source={{
              uri: "https://www.hourlyrooms.co.in/uploads/0000/1/2021/11/19/logo-3.png",
            }}
            style={{ width: 190, height: 120, resizeMode: "contain" }}
          />
        </View>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginBottom:'1rem'
            }}
          >
            <Icon name="alternate-email" size={30} style={{ color: "grey",marginRight:'.4rem' }} />

            <TextInput
              placeholder="User Name/Email ID"
              style={{
                width: 260,
                height: 40,
                outline: "none",
                borderBottom: "1px solid grey",
              }}
            />
          </View>
          <View style={{marginBottom:'3rem'}}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                
              }}
            >
              <Icon name="lock" size={30} style={{ color: "grey",marginRight:'.4rem' }} />

              <TextInput
               secureTextEntry={showPassword}
                placeholder="Password"
                style={{
                  width: 260,
                  height: 40,
                  outline: "none",
                  borderBottom: "1px solid grey",
                }}
              />
              
            </View>
            <TouchableOpacity
              onPress={() => {
                setShowPassword((current) => !current);
              }}
            >
              <Text
                style={{
                  color: "black",
                  position: "absolute",
                  right: "10%",
                  top: "-2rem",
                }}
              >
                {showPassword ? "Show" : "Hide"}
              </Text>
            </TouchableOpacity>
          <View
            style={{
              fontSize:13,
              marginTop:'.5rem',
              marginLeft:'14rem',
              color: "#2243b6",
              fontWeight: "bold",
              
            }}
            >
            <TouchableOpacity>Forgot Password?</TouchableOpacity>
          </View>
        </View>
            </View>
        <View style={{ alignItems:'center'}}>
          <TouchableOpacity
            style={{
              width: 310,
              height: 45,
              backgroundColor: "#2243b6",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "2rem",
              fontSize: 20,
              fontWeight: "bold",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,

              elevation: 6,
            }}
          >
            Login
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default LoginForm2;

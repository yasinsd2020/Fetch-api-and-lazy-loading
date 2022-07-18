import React from 'react';
import useForm from "./useForm";
import validate from './LoginFormValidationRules';
import { View, TextInput, TouchableOpacity , Image ,Text} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Form = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);

  function login() {
    console.log('No errors, submit callback called!');
  }

  return (
    <View className="section is-fullheight">
      <View className="container">
        <div className="column is-4 is-offset-4" style={{alignItems:'center' ,width:'100%', justifyContent:'center', display:'flex'}}>
          <div className="box">
          <View style={{marginTop:'7rem', justifyContent:'center',alignItems:'center'}}>
        <Image
            source={{
              uri: "https://www.hourlyrooms.co.in/uploads/0000/1/2021/11/19/logo-3.png",
            }}
            style={{ width: 190, height: 120, resizeMode: "contain" }}
          />
        </View>
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
              
                <div className="control">
            <Icon name="alternate-email" size={30} style={{ color: "grey",marginRight:'.4rem' }} />

                  <TextInput autoComplete="off" 
                    placeholder="User Name/Email ID"
                  style={{  width: 260,
                  height: 40,
                  outline: "none",
                  borderTop: "1px solid white",
                  borderLeft:'white',
                  borderRight:'white',
                  borderBottom:'1px solid grey'}} className={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                  {errors.email && (
                    <Text style={{fontSize:13 , color:'red'}} >{errors.email}</Text>
                  )}
                </div>
              </div>
              <div className="field">
               
                <div className="control">
                <Icon name="lock" size={30} style={{ color: "grey",marginRight:'.4rem' }} />

                  <input
                       placeholder="Password"
                  style={{  width: 260,
                  height: 40,
                  outline: "none",
                  borderTop: "1px solid white",
                  borderLeft:'white',
                  borderRight:'white',
                  borderBottom:'1px solid grey'}} className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} required />
                </div>
                {errors.password && (
                  <Text style={{fontSize:13 , color:'red'}} className="help is-danger">{errors.password}</Text>
                )}
              </div>


         
           <button  
                    style={{
                      width: 310,
                      height: 45,
                       border:'none', 
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
            type="submit" >
            Login
            </button>
         
            </form>
          </div>
        </div>
      </View>
    </View>
  );
};

export default Form;
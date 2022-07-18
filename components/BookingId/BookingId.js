import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text, StyleSheet, View, FlatList, Button } from "react-native";
import { useState, useEffect } from "react";
 
import { Touchable, TouchableOpacity } from "react-native-web";

const BookingId = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("process");
  const [card,setCard]=useState([])
  const toggle = () => {
    setShow(!show);
  };

const DataFetch =async()=>{
  const apiUrl = 'https://api.github.com/users?_limit=1&_page=1';
  fetch(apiUrl).then(response => response.json())
  .then(data => {
    console.log(data);
      setCard(data);
  
  })
  .then()

} 
useEffect(() => {
  DataFetch(
   
  )
}, []); 

const renderItem=({item})=>{
  return(
   < ><View style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
   <View style={{display:'flex' ,  width:'90%', paddingLeft:'1rem', paddingRight:'1rem'
      , fontFamily: 'Roboto, sans-serif', height:'320px',boxShadow:' rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px', border:'1px solid grey',marginBottom:'1rem'

  }}>
      <View  style={{}}>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <h2>Booking Id :- </h2>
          <h2>#1234</h2>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent:'space-between',
            width: "100%",
            position:'relative',
            zIndex:1
          }}
        >
                <Text style={{fontSize:'25px', fontWeight:'bold', }}>Status 
                
                </Text>
          <View style={{ }}>
           
            <TouchableOpacity
              style={{ backgroundColor: "#2243b6",color:'white',  width: "120px" , fontSize:'20px', padding:'.5rem', display:'flex', flexDirection:'row', justifyContent:'space-between',boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', borderRadius:'.5rem '}}
              onPress={toggle}
            >
              {value}
              <Icon name="angle-down"  style={{color:'white',fontSize:'20px'}}/>
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: "#F4F5FF",
                display: show ? "flex" : "none",
                width: "8rem",
                padding:'.5rem',
                fontSize:'20px',
                flexDirection: "column",
                width: "100%",
                height:'100px',
                boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setValue("process");
                  toggle();
                }}
                style={{borderBottom:'1px solid black'}}
              >
                Process
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setValue("paid");
                  toggle();
                }}
                style={{borderBottom:'1px solid black'}}
              >
                Paid{" "}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setValue("updaite");
                  toggle();
                }}
                style={{borderBottom:'1px solid black'}}
              >
                Update
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{  marginTop: "6rem", display:'flex',  position:'absolute',width:'100%',
            zIndex:0 }}>
          <View>
            <h2>Customer Details</h2>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>First Name:</Text>
            <Text style={styles.text2}>{item.login}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Last Name:</Text>
            <Text style={styles.text2}>Shaikh</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Email:</Text>
            <Text style={styles.text2}>Yasin20z20@gmail.com</Text>
          </View>
          <View style={{borderBottom:'1px solid black',display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={styles.text}>Phone No:</Text>
            <Text style={styles.text2}>+91986998982</Text>
          </View>
          <View style={{ display:'flex' , flexDirection:'row', justifyContent:'space-between',marginTop:'.5rem',  marginBottom:'.6rem'}}>
            <Text  style={{fontSize:'22px', fontWeight:'600'}}>Total Amt :-</Text>
        <Text style={{fontSize:'25px', fontWeight:'600'}}>₹10000 /-</Text>
        </View>
        </View>
        
      </View>
      
      </View>
      </View>
   </>
  )
}

  return (
    <>
   
   <FlatList
   
 
   data={card}
   renderItem={renderItem}
  //  keyExtractor={(item, index)=>index.toString()}
   
   
   />
   
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex-start",
    flexDirection: "row",

    justifyContent:'space-between',
  

  },
  text:{
    fontSize:'19px',
    fontWeight:'500'
  },
  
  text2:{
    fontSize:'16px',
    fontWeight:'500'
  },
  drop:{
    backgroundColor: "##F4F5FF",color:'white' , fontSize:'20px', padding:'.5rem'
  }

});

export default BookingId;


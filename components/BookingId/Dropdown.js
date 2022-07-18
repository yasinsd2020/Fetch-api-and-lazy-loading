import React, { Component } from "react";
import DropdownMenu from "react-native-dropdown-menu";
import { View, Text } from "react-native";
export default class dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  render() {
    var data = [
      ["Big Data", "Hadoop", "Spark", "Hive"],
     
    ];
    return (
      <View style={{  flexDirection:'row',width:'40%' ,position:'relative' , zIndex:'3'  , marginTop:'1rem'}}>
        <View>
        <Text  >Status</Text>
        </View>
        <View style={{ height:'10%', width:'5%' , backgroundColor:'red'}} />
        <DropdownMenu
         
          bgColor={"grey"}
          tintColor={"black"}
          activityTintColor={"blue"}
          handler={(selection, row) =>
            this.setState({ text: data[selection][row] })
          }
          data={data}
        ></DropdownMenu>
      </View>
    );
  }
}

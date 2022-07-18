import React, { Component } from "react";
import {View , Text , FlatList, ImageBackground, ActivityIndicator} from 'react-native'
import BookingId from "./BookingId";

//https://jsonplaceholder.typicode.com/photos?_limit=10&_page=1
class LoadMore extends Component{
  constructor(props){
    super(props)
    this.state={
      data:[],
      page:1,
      isloading:false
    }
  }

  componentDidMount(){
    const apiUrl = "https://jsonplaceholder.typicode.com/photos?_limit=1&_page=1"
    fetch(apiUrl).then(response => response.json())
    .then(responseJson => {
      
      this.setState({ data : responseJson})
    })
  }
 
  renderView=({item})=>{
    return(
     <>
     <BookingId />
     </>
    )
  }
  handleLoadMore=async()=>{
    await this.setState({ page : this.state.page + 1 , isloading:true})
    const apiUrl = "https://jsonplaceholder.typicode.com/photos?_limit=1&_page="+ this.state.page;
    fetch(apiUrl).then(response => response.json())
    .then(responseJson => {
      
      this.setState({ data : this.state.data.concat(responseJson) , isloading:false})
    })
  }
  footerList=()=>{
    return(
      <View >
      <ActivityIndicator loading={this.state.isloading} size={"large"} />
    </View>
    )
  }

 render() {
  return(
    <View >
      <FlatList 
        style={{flex:1}}
        data={this.state.data}
        renderItem={this.renderView}
        keyExtractor={(item, index)=>index.toString()}
        onEndReached={this.handleLoadMore}
        ListFooterComponent={this.footerList}
      />
    </View>
  )
 }
}

export default LoadMore
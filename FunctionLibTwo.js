import React, {Component} from "react";
import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import {getPlaylistInfoPromise, getVideosFromPlaylistPromise} from "./FunctionLibOne";

export class ListOfSongs extends Component{
  constructor(props){
    super();
    this.state = {
      loading: "Loading Playlist",
      videoList: null,
      style: {
        loadingTextStyle: {
          textAlign: "center"
        },
        videoStyle: {
          height: 500
        }
      }
    }
  }

  updateLoadingText = async (text) => {
    this.setState({loading: text})
  }

  componentWillMount = async () => {
    try{
      let playlistInfo = await getPlaylistInfoPromise();
      this.updateLoadingText("Loading Playlist / playlistInfo");
      let videoList = await getVideosFromPlaylistPromise(playlistInfo);
      this.updateLoadingText(null);
      this.setState({videoList})
    }catch(err){
      console.log(`Rejected: ${err}`);
    }
  }

  showLoadingText = () => {
    if(this.state.loading !== null){
      return (
        <Text style={this.state.style.loadingTextStyle}>{this.state.loading}</Text> 
      )
    }
  }

  handleVideoPress = (event) => {
    console.log(event);
  }

  showVideoList = () => {
    if(this.state.videoList !== null){
      let color = ["#eeeeee", "#cccccc"];
      let i = 0;
      return (
        <ScrollView style={this.state.style.videoStyle}>
          {this.state.videoList.map(x => {
            let touchID = i;
            i++;
            return (
              <TouchableOpacity onPress={e => this.handleVideoPress(touchID)} key={x.id} style={{backgroundColor: color[i % 2], flexDirection: "row", padding: 5}}>
                <Text>{i}. </Text>
                <Text>{x.title}</Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      )
    }
  }

  render(){
    return (
      <View>
        {this.showLoadingText()}
        {this.showVideoList()}
      </View>
    )
  }
}
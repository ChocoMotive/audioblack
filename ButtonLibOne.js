import React, {Component} from "react";
import {View, Text, Dimensions, Button, TouchableOpacity, AppRegistry, StyleSheet, Alert, Image, TextInput, ScrollView} from "react-native";
import { red } from "ansi-colors";
import YoutubeNOKEY from "simple-youtube-api";
const Youtube = new YoutubeNOKEY("AIzaSyAx48JhDIGnBstfv4WOhKmv90bsKS0q6qs");
import {getPlaylist, getPLaylistInfo} from "./FunctionLibOne";

export class DownloadButton extends Component{
    constructor(props){
        super();
        let height = Dimensions.get("window").height;
        let width = Dimensions.get("window").width;
        this._onPressCounter = 0;
        this.state = {
            mainView: {
                marginTop: height * .0
            },

            buttonView: {
                marginTop: height * .05,
                marginLeft: width * .25,
                marginRight: width * .25
            }
        }
    }

    _onPressButton() {
        Youtube.getPlaylist('https://www.youtube.com/playlist?list=PLuY9odN8x9puRuCxiddyRzJ3F5jR-Gun9')
            .then(results => {
                console.log(results);
            })
        .catch(console.error);
        Alert.alert(`You have pressed the Download Button!`);
    }

    render(){
        return (
            <View style={this.state.mainView}>
                {/*<Text>Button Library Page</Text>*/}

                <View style={[this.state.buttonView]}>
                <Button
                    title="Download"
                    color="#rgb(40, 40, 40)"
                    onPress={this._onPressButton}
                />
                </View>
            </View>
        )
    }
}

export class CheckButton extends Component{
    constructor(props){
        super();
        let height = Dimensions.get("window").height;
        let width = Dimensions.get("window").width;
        this.state = {
            mainView: {
                marginTop: height * .05,
                marginLeft: width * .25,
                marginRight: width * .25
            }
        }
    }

    _onPressButton() {
        Youtube.searchPlaylists('Cardi B')
            .then(results => {
                console.log(results);
            })
        .catch(console.error);
        Alert.alert(`You have pressed the Check Playlist Button!`);
    }

    render(){
        return(
            <View style = {this.state.mainView}>

                <Button
                    title="Check Playlist"
                    color="rgb(40, 40, 40)"
                    onPress={this._onPressButton}
                />
            </View>
        )
    }
}

export class AddButton extends Component{
    constructor(props){
        super();
        let height = Dimensions.get("window").height;
        let width = Dimensions.get("window").width;
        this.state = {
            mainView: {
                marginTop: height * .05,
                marginLeft: width * .25,
                marginRight: width * .25
            }
        }
    }

    _onPressButton() {
        Alert.alert(`You have pressed the Add to PLaylist Button!`);
        getPLaylistInfo();
    }

    render(){
        return(
            <View style = {this.state.mainView}>

                <Button
                    title="Add Playlist"
                    color="rgb(40, 40, 40)"
                    onPress={this._onPressButton}
                />
            </View>
        )
    }
}

export class Bananas extends Component {
    constructor(props){
        super();
        let height = Dimensions.get("window").height;
        let width = Dimensions.get("window").width;
        this.state = {
            marginView: {
                marginTop: height * .1,
                marginLeft: width * .15
            },

            mainView: {
                height: Dimensions.get("window").height * .2,
                width: Dimensions.get("window").width * .7
            }
        }
    }

    render() {
      let pic = {
        uri: "https://i.imgur.com/poIy94N.png"
      };
      return (
        <View style = {this.state.marginView}>
        <Image
            source={pic}
            style={this.state.mainView}
            resizeMode="center"
            resizeMode="contain"
        />
        </View>
      )
    }
}

export class UselessTextInput extends Component {
    constructor(props) {
      super(props);
      let height = Dimensions.get("window").height;
      let width = Dimensions.get("window").width;
      this.state = {
            text: ' Enter Playlist URL',

            mainView: {
                marginTop: height * .15,
                marginLeft: width * .05,
                marginRight: width * .05
            },

            textInputStyle: {
                height: height * .07,
                borderColor: "rgb(40, 40, 40)",
                borderWidth: 1
            }
        };
    }
  
    render() {
      return (
        <View style = {this.state.mainView}>
            <TextInput style={this.state.textInputStyle} 
                onChangeText={(text) => this.setState({text})}
                placeholder={this.state.text} >
            </TextInput>
        </View>
      );
    }
}

export class ListOfSongs extends Component {
    constructor(props) {
      super(props);
      let height = Dimensions.get("window").height;
      let width = Dimensions.get("window").width;
      this.state = {
            mainView: {
                marginTop: height * .15,
                marginLeft: width * .05,
                marginRight: width * .05,
            },

            textView: {
                height: Dimensions.get("window").height * .15
            }
        };
    }
  
    render() {
      return (
        <ScrollView style={this.state.textView}>
            
            <Text>{getPLaylistInfo()}</Text>
            <Text>Sup</Text>
            <Text>Sup</Text>
            <Text>Sup</Text>
            <Text>Sup</Text>
            <Text>Sup</Text>
            <Text>Sup</Text>
        </ScrollView>
      );

      
    }
}
import React, {Component} from "react";
import {View, Text, Dimensions, Button, TouchableOpacity, AppRegistry, StyleSheet} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class CompOne extends Component{
    constructor(props){
        super();
        let height = Dimensions.get("window").height;
        let width = Dimensions.get("window").width;
        this.state = {
            mainView: {
                marginTop: height * .05
                
            },

            buttonView: {
                marginTop: height * .45,
                marginLeft: width * .25,
                marginRight: width * .25
            }
        }
    }

    render(){
        return (
            <View style={this.state.mainView}>
                <Text>CompOne Page</Text>

                <View style={[this.state.buttonView]}>
                <Button
                    title="Download"
                    color="#rgb(0, 255, 255)"
                    
                    
                />
                </View>


            </View>
        )
    }
}
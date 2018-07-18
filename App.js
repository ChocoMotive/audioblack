import React from 'react';
import { Text, View, ScrollView} from 'react-native';
import CompOne from "./compOne";
import {DownloadButton, CheckButton, AddButton, Bananas, UselessTextInput} from './ButtonLibOne';
import { ListOfSongs } from "./FunctionLibTwo";

export default class App extends React.Component {
  render() {
    return (
      <View >
        <Bananas/>
        <ListOfSongs/>
      </View>
    );
  }
}
import React from 'react';
import { Text, View, ScrollView} from 'react-native';
import CompOne from "./compOne";
import {DownloadButton, CheckButton, AddButton, Bananas, UselessTextInput, ListOfSongs} from './ButtonLibOne';

export default class App extends React.Component {
  render() {
    return (
      <View >
        <Bananas/>
        <UselessTextInput/>
        <ListOfSongs/>
        <DownloadButton/>
        <CheckButton/>
        <AddButton/>
      </View>
    );
  }
}
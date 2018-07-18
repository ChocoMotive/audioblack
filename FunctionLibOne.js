import React, {Component} from "react";
import {View, Text, Dimensions, Button, TouchableOpacity, AppRegistry, StyleSheet, Alert, Image} from "react-native";
import { red } from "ansi-colors";
import YoutubeNOKEY from "simple-youtube-api";
const Youtube = new YoutubeNOKEY("AIzaSyAx48JhDIGnBstfv4WOhKmv90bsKS0q6qs");

export function getPLaylistInfo(){
    Youtube.getPlaylist('https://www.youtube.com/watch?v=0qHGEgFucQU&list=LLi4EDAgjULwwNBHOg1aaCig')
            .then(results => {
                return results.getVideos()
            })
            .then(videos => {
                console.log(videos);
                console.log(videos[0].id);
                console.log(videos[1].id);
                console.log(videos[2].id);
                return videos;
            })
        .catch(console.error);
}
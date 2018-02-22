'use strict';
import React, { Component } from 'react';
import { HomeTabs } from "./src/config/routes";
import { StyleSheet, View } from 'react-native';

export default class App extends Component {
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
    }

  render() {
    return (
            <HomeTabs/>
    );
  }
}
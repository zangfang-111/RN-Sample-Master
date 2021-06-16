import React, { Component } from "react";
import Login from '../screens/login';
import { View, SafeAreaView } from "react-native";
import NavigationRouter from "../navigation/navigation-router";

export default class RootContainer extends Component {

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
        <NavigationRouter />
        {/* <Login /> */}
      </SafeAreaView>
    );
  }
}

import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>ColorBlinder - Home screen!</Text>
      </View>
    );
  }
}

import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../components";

export default class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#0a0a0a",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Header />
        <TouchableOpacity
          onPress={() => {
            console.log("onPlayPress event handler");
          }}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Image
            source={require("../assets/icons/play_arrow.png")}
            style={{
              height: 60,
              width: 60,
              marginRight: 15,
            }}
          />
          <Text
            style={{
              fontSize: 45,
              fontFamily: "dogbyte",
              color: "#ecf0f1",
              marginTop: 5,
            }}
          >
            PLAY!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

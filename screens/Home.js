import React, { Component, useState } from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Header } from "../components";

export default function Home() {
  const [isSoundOn, setIsSoundOn] = useState(false);

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
        style={{ flexDirection: "row", alignItems: "center", marginTop: 80 }}
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
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../assets/icons/trophy.png")}
          style={{
            height: 45,
            width: 45,
            marginRight: 12.5,
            marginTop: 30,
          }}
        />
        <Text
          style={{
            fontSize: 28.5,
            fontFamily: "dogbyte",
            color: "#ecf0f1",
            marginTop: 5,
          }}
        >
          Hi-score: 0
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log("onLeaderboardPress event handler");
        }}
        style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
      >
        <Image
          source={require("../assets/icons/leaderboard.png")}
          style={{
            height: 60,
            width: 60,
            marginRight: 15,
          }}
        />
        <Text
          style={{
            fontSize: 32,
            fontFamily: "dogbyte",
            color: "#ecf0f1",
            marginTop: 5,
          }}
        >
          Leaderboard
        </Text>
      </TouchableOpacity>
      <View
        style={{
          position: "absolute",
          left: 15,
          right: 15,
          bottom: 12.5,
          flexDirection: "row",
        }}
      >
        <View>
          <Text style={[styles.copyrightText, { color: "#E64C3C" }]}>
            Music: Komiku
          </Text>
          <Text style={[styles.copyrightText, { color: "#F1C431" }]}>
            SFX: SubspaceAudio
          </Text>
          <Text style={[styles.copyrightText, { color: "#3998DB" }]}>
            Development: RisingStack
          </Text>
        </View>
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={() => setIsSoundOn(!isSoundOn)}>
          <Image
            source={
              isSoundOn
                ? require("../assets/icons/speaker-on.png")
                : require("../assets/icons/speaker-off.png")
            }
            style={{
              width: 40,
              height: 40,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  copyrightText: {
    fontSize: 16,
    fontFamily: "dogbyte",
    marginBottom: 2.5,
  },
});

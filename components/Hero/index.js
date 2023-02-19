import { SafeAreaView, StyleSheet, Text, View, Linking } from "react-native";
import { Button } from "@react-native-material/core";
import React from "react";
import TypeWriter from "../Typewriter";

const Hero = () => {
  return (
    <SafeAreaView>
      <View style={styles.section}>
        <Text style={styles.overline}>Hi there, my name is</Text>
        <TypeWriter
          style={styles.name}
          words={["Vipul Kumar Singh"]}
          wait={3000}
        />
        <Text style={styles.shortDesc}>
          I write code for responsive websites.
        </Text>
        <Text style={styles.description}>
          I&lsquo;m a Front-End developer based in Sasaram, India, specializing
          in developing high-quality websites with the latest technologies &
          best practices.
        </Text>
        <Button
          style={styles.button}
          title="Get In Touch"
          uppercase={false}
          tintColor="#64ffda"
          titleStyle={styles.btnTitle}
          onPress={() =>
            Linking.openURL(
              `mailto:vipulsinghssm1@gmail.com?subject=Get%20In%20Touch&body=Hello%20Vipul,`
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  overline: {
    fontSize: 16,
    fontWeight: "600",
    color: "#64ffda",
    marginTop: "8%",
    marginBottom: 10,
  },
  section: {
    paddingLeft: "8%",
    paddingRight: "8%",
  },
  name: {
    fontSize: 30,
    fontWeight: "400",
    marginBottom: 5,
    color: "#ffffff",
    height: 40,
  },
  shortDesc: {
    fontSize: 36,
    color: "#8892b0",
  },
  description: {
    fontSize: 18,
    color: "#8892b0",
    marginTop: 16,
    lineHeight: 25
  },
  button: {
    marginTop: "10%",
    width: 175,
    borderColor: "#64ffda",
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  btnTitle: {
    fontSize: 18,
  },
});

export default Hero;

import { SafeAreaView, StyleSheet, Text, View, Linking } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Footer = () => {
  return (
    <SafeAreaView>
      <View style={styles.section}>
        <View style={styles.iconDiv}>
          <AntDesign
            style={styles.icon}
            name="github"
            size={24}
            color="#8892b0"
            onPress={() => Linking.openURL("https://github.com/Vipul-26")}
          />
          <AntDesign
            style={styles.icon}
            name="linkedin-square"
            size={24}
            color="#8892b0"
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/vipul-singh-929354153/"
              )
            }
          />
          <AntDesign
            style={styles.icon}
            name="instagram"
            size={24}
            color="#8892b0"
            onPress={() =>
              Linking.openURL("https://www.instagram.com/vips.26/")
            }
          />
          <AntDesign
            style={[styles.icon, styles.lastIcon]}
            name="twitter"
            size={24}
            color="#8892b0"
            onPress={() =>
              Linking.openURL("https://twitter.com/VipulSi78066437")
            }
          />
        </View>
        <Text style={styles.email}>vipulsinghssm1@gmail.com</Text>
        <Text style={styles.footDesc}>
          Handcrafted with <Text style={styles.heart}>&#10084;</Text> in India.
        </Text>
        <Text style={styles.footDesc}>Copyright &copy;2023</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: "3%",
    paddingBottom: "3%",
    marginTop: "15%",
    backgroundColor: "#172a45",
  },
  email: {
    fontSize: 18,
    marginBottom: 15,
    color: "#00ced1",
    textAlign: "center",
    fontWeight: "500",
  },
  footDesc: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    color: "#8892b0",
    fontWeight: "500",
  },
  heart: {
    color: "red",
  },
  iconDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 15,
    marginTop: 10,
  },
  icon: {
    marginRight: 30,
  },
  lastIcon: {
    marginRight: 0,
  },
});

export default Footer;

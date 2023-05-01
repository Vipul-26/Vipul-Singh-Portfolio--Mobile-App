import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Linking,
  FlatList,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

const About = () => {
  return (
    <SafeAreaView>
      <View style={styles.section}>
        <View style={styles.headingDiv}>
          <Text style={[styles.heading, styles.mainColor]}>01. </Text>
          <Text style={styles.heading}>About Me</Text>
          <View
            style={{
              flex: 1,
              height: 2,
              marginTop: 16,
              marginLeft: 10,
              backgroundColor: "#8892b0",
            }}
          />
        </View>
        <Text style={styles.text}>
          Hello! I&lsquo;m Vipul, a Front-End developer based primarily in Pune,
          India, who has been jubilantly writing code for responsive websites
          and mobile apps since 2020.
        </Text>
        <Text style={styles.text}>
          After my graduation from
          <Text> </Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://www.trubainstitute.ac.in/")}
          >
            TCST
          </Text>
          , Bhopal, I started my career as a front-end developer and today,
          after 2.8+ years, as a front-end developer, I worked on a good short
          of web & mobile apps.
        </Text>
        <Text style={styles.text}>
          Currently, I&lsquo;m working with
          <Text> </Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://www.amdocs.com/")}
          >
            AMDOCS
          </Text>
          .
        </Text>
        <FlatList
          numColumns={2}
          data={[
            "JavaScript",
            "Typescript",
            "React",
            "Redux",
            "Redux-Saga",
            "NextJS",
            "React Native",
            "Html5",
            "Css3",
            "Bootstrap",
            "TailwindCSS",
            "Content Stack",
          ]}
          style={styles.lists}
          renderItem={({ item }) => (
            <View style={styles.list}>
              <MaterialIcons name="arrow-right" size={24} color="#64ffda" />
              <Text style={styles.item}>{item}</Text>
            </View>
          )}
        />
        <Text style={styles.resume}>
          Download my
          <Text> </Text>
          <Text
            style={styles.link1}
            onPress={() =>
              Linking.openURL("https://www.vipulsingh.in.net/VipulResume.pdf")
            }
          >
            resume
          </Text>
          <Text> </Text>
          from here.
        </Text>
        <Image
          style={styles.image}
          source={require("../../assets/Vipul.jpg")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingLeft: "8%",
    paddingRight: "8%",
    marginTop: "20%",
    marginBottom: "5%",
  },
  heading: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 25,
    color: "#8892b0",
  },
  headingDiv: {
    display: "flex",
    flexDirection: "row",
  },
  mainColor: {
    color: "#64ffda",
  },
  text: {
    fontSize: 18,
    color: "#8892b0",
    marginBottom: 18,
    lineHeight: 25,
  },
  link: {
    color: "#64ffda",
    marginLeft: 15,
    paddingLeft: "15",
  },
  link1: {
    color: "#64ffda",
    marginLeft: 5,
    marginRight: 5,
  },
  lists: {
    display: "flex",
    flexWrap: "wrap",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "55%",
    marginLeft: -7,
    marginBottom: 7,
  },
  item: {
    fontSize: 18,
    color: "#8892b0",
  },
  resume: {
    marginTop: 15,
    fontSize: 18,
    color: "#8892b0",
  },
  image: {
    width: 230,
    height: 280,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 40,
  },
});

export default About;

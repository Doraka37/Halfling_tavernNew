import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import SheetResume from '../Components/SheetResume';


LogBox.ignoreAllLogs()

export function Home(props) {
    return (
      <View style={{
        backgroundColor: "rgb(99,11,11)",
        flex: 15
        }}>
        <View style={{
          backgroundColor: "#032033",
          flex: 15
          }}>
          <Text
              style={{marginTop: 10, fontSize: 60, textAlign: "center", fontFamily: "Ace_Records"}}> 
              Characters
            </Text>
        </View>
        <SafeAreaView style={{
          flexDirection: "column",
          alignItems: "center",
          flex: 85,
          }}>
          <SheetResume name={"Doraka"} lvl={6} class={"Bard"} race={"Humain"}/>
          <SheetResume name={"Islandzi"} lvl={6} class={"Rodeur"} race={"Elf"}/>
            <TouchableOpacity
              style={{position: "absolute", top:580, left: 300}}
              onPress={() =>
                props.navigation.navigate('Race')
              }
            >
              <Image
                style={styles.tinyLogo}
                source={require("../../Ressources/plus.png")}
              />
            </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }

const styles = StyleSheet.create({
  MidleText: {
    fontSize: 16,
    color: "black",
    fontFamily: "Ace_Records"
  },
  tinyLogo: {
    width: 60,
    height: 60,
  },
});

export default Home;
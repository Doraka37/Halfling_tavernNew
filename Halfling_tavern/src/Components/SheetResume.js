import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
  } from 'react-native';
  import { SquircleView } from 'react-native-figma-squircle'

function SheetResume(props) {
  return (
    <SquircleView
          style={{ width: "90%", height: 130, marginTop: 20 }}
          squircleParams={{
            cornerSmoothing: 0.7,
            cornerRadius: 30,
            fillColor: '#330606',
          }}
        >
          <Text
            style={{marginTop: 10, fontSize: 25, textAlign: "center", fontFamily: "Ace_Records", color: "white",}}> 
            {props.name} 
          </Text>
          <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            }}>
            <Text
              style={styles.MidleText}> 
              niveau {props.lvl} 
            </Text>
            <Text
              style={styles.MidleText}> 
              {props.class} 
            </Text>
            <Text
              style={styles.MidleText}> 
              {props.race} 
            </Text>
          </View>
          <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center"
            }}>
              <Image
                style={styles.tinyLogo}
                source={require("../../Ressources/amsterdam_city.jpg")}
              />
              <Image
                style={styles.tinyLogo}
                source={require("../../Ressources/amsterdam_city.jpg")}
              />
              <Image
                style={styles.tinyLogo}
                source={require("../../Ressources/amsterdam_city.jpg")}
              />
          </View>
        </SquircleView>
  );
}

const styles = StyleSheet.create({
    MidleText: {
      fontSize: 16,
      color: "white",
      fontFamily: "Ace_Records",
      textAlign: "justify",
      marginRight: 15
    },
    tinyLogo: {
      width: 60,
      height: 60,
    },
  });

//const mapStateToProps = (state) => state;
//export default connect(mapStateToProps)(ButtonIcon);
export default SheetResume;
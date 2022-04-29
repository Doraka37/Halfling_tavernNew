import React from 'react';
import {
    Text,
    View,
    Image,
  } from 'react-native';

function RaceTop({race, image, description}) {
    console.log("image: ",image);
    return (
        <View style={{
            backgroundColor: "#032033",
            alignItems: "center", justifyContent: "center",
        }}>
            <Image
                style={{width: '100%', resizeMode: "stretch"}}
                source={image}
            />
            <Text style={{fontSize: 60, textAlign: "center", fontFamily: "dungeon", marginTop: 20, color: "white"}}>
                {race}
            </Text>
            <View style={{
                width: "100%",
                alignItems: "center", justifyContent: "center", marginBottom: 20
            }}>
                <Text style={{fontSize: 30, textAlign: "center", fontFamily: "dungeon", marginTop: 20, textAlign: "center", color: "white"}}>
                    {description}
                </Text>
            </View>
        </View>
    );
}

export default RaceTop;
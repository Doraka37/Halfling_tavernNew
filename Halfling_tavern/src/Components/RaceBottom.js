import React from 'react';
import Store from '../../Store/configureStore';

import {
    Text,
    View,
    TouchableOpacity
  } from 'react-native';

var Image_array = [require("../../Ressources/Half-Elf.png"), require("../../Ressources/human.jpg"), require("../../Ressources/dwarf.jpg"), require("../../Ressources/gnome.png")]

function RaceBottom({id, race, navigation}) {
    const store = Store.getState();

    return (
        <View style={{
            flex: 0.1,
            backgroundColor: "#330606",
            alignItems: "center", justifyContent: "center",
            width: "100%",
        }}>
            <TouchableOpacity style={{
                    backgroundColor: "#330606",
                    width: "80%",
                }}
                onPress={() => {
                    console.log("setting race: ", race)
                    let action = {
                        type: 'SET_RACE',
                        value: race
                    };
                    Store.dispatch(action);
                    navigation.navigate('Class', {
                        race: race,
                })}
            }>
                <View style={{
                    backgroundColor: "#330606",
                    width: "100%",
                }}>
                    <Text style={{fontSize: 60, fontFamily: "dungeon", marginTop: -10, textAlign: "center", color: "white"}}>
                        Choisir cette race
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default RaceBottom;
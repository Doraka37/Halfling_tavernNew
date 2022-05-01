import React from 'react';
import {
    Text,
    View,
  } from 'react-native';
import RaceDisplay from './Races/RaceDisplay';
import Elf from './Races/Elf';
import half_elf from "../../Ressources/jsons/half_elf.json"

export function RaceComponnent({id, race, navigation, reset, setReset}) {
    switch(id){
        case 0:
            return <RaceDisplay race={race} id={id} navigation={navigation} infos={half_elf} reset={reset} setReset={setReset}/>
        case 1:
            return <Elf race={race} id={id} navigation={navigation}/>
        default:
            return <View style={{
                backgroundColor: "#330606",
                width: "100%",
            }}>
                <Text style={{fontSize: 60, fontFamily: "dungeon", marginTop: -10, textAlign: "center"}}>
                    Choisir cette race3
                </Text>
            </View>
    }
}

export default RaceComponnent;
import React from 'react';
import {
    Text,
    View,
  } from 'react-native';
import RaceDisplay from './Races/RaceDisplay';
import SubRace from './Races/SubRace';

export function RaceComponnent({id, race, navigation, infos, subrace}) {
    switch(subrace){
        case false:
            return <RaceDisplay race={race} id={id} navigation={navigation} infos={infos}/>
        case true:
            return <SubRace race={race} id={id} navigation={navigation} infos={infos} />
        default:
            return <View style={{
                backgroundColor: "#330606",
                width: "100%",
            }}>
                <Text style={{fontSize: 60, fontFamily: "dungeon", marginTop: -10, textAlign: "center"}}>
                    Choisir cette race
                </Text>
            </View>
    }
}

export default RaceComponnent;
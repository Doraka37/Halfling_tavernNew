import React from 'react';
import {
    Text,
    View,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity
  } from 'react-native';
import Half_Elf from './Races/Half_Elf';
import Elf from './Races/Elf';

var Image_array = [require("../../Ressources/Half-Elf.png"), require("../../Ressources/human.jpg"), require("../../Ressources/dwarf.jpg"), require("../../Ressources/gnome.png")]

export function RaceComponnent({id, race, navigation}) {
    switch(id){
        case 0:
            return <Half_Elf race={race} id={id} navigation={navigation}/>
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

//const mapStateToProps = (state) => state;
//export default connect(mapStateToProps)(ButtonIcon);
export default RaceComponnent;
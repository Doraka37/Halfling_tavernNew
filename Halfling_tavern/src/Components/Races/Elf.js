import React, { useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity
  } from 'react-native';

import RaceBottom from '../RaceBottom';
import Eladrin from './SubRaces/Eladrin';
import Half_Elf from './Half_Elf';

function Elf({id, race, navigation}) {

    const [sub, setSub] = useState(0);

    function SubRaceComponnent({id, race, navigation}) {
        switch(sub){
            case 0:
                return <Eladrin race={"Eladrin"} id={id} navigation={navigation}/>
            case 1:
                return <Half_Elf race={"High Elf"} id={id} navigation={navigation}/>
            default:
                return <View style={{
                    backgroundColor: "#330606",
                    width: "100%",
                }}>
                </View>
        }
    }

    function SubRaceSelec({race, color, id}) {
        let backcolor = "#090F2E"
        if (sub == id) 
            backcolor = "#405BDE"
        return (
            <View style={{
              width: 120, height: 50, backgroundColor: backcolor, justifyContent: 'center',
              alignItems: 'center', flexDirection: "row" 
            }}>
                <TouchableOpacity
                    onPress={() => setSub(id)}
                >
                    <Text style={{fontSize: 40, fontFamily: "dungeon", textAlign: "center", color: "white"}}>
                        {race}
                    </Text>
                </TouchableOpacity>
            </View>
          );
    }

    return (
        <SafeAreaView style={{
            flex: 100,
            backgroundColor: "#032033",
            alignItems: "center", justifyContent: "center",
            }}>
            <ScrollView style={{
                backgroundColor: "#032033",
                flex: 80,
                }}
                nestedScrollEnabled={true}
                contentContainerStyle={{alignItems: "center", justifyContent: "center",}}>
                <Text style={{fontSize: 60, textAlign: "center", fontFamily: "dungeon", marginTop: 20, color: "white"}}>
                    {race}
                </Text>
                <View style={{
                    width: "100%",
                    alignItems: "center", justifyContent: "center", marginBottom: 20
                }}>
                    <Text style={{fontSize: 30, textAlign: "center", fontFamily: "dungeon", marginTop: 20, textAlign: "center", color: "white"}}>
                    Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.
                    </Text>
                </View>
                <Text style={{fontSize: 50, textAlign: "center", fontFamily: "dungeon", marginTop: 20, color: "white"}}>
                    This class comport several subraces
                </Text>
                <SafeAreaView style={{flex: 1000, flexDirection: "row"}}>
                    <SubRaceSelec race={"Eladrin"} id={0}/>
                    <SubRaceSelec race={"High-Elf"} id={1}/>
                    <SubRaceSelec race={"Wood-Elf"} id={2}/>
                </SafeAreaView>
                <SubRaceComponnent race={race} id={sub} navigation={navigation}/>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Elf;
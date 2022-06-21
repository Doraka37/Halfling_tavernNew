import React, { useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity
  } from 'react-native';

import RaceDisplay from './RaceDisplay';
import { useDispatch } from 'react-redux'
import { reset } from '../../../Store/Reducers/baseReducer';

function SubRace({id, race, navigation, infos}) {
    const [sub, setSub] = useState(1);
    const dispatch = useDispatch()

    function SubRaceComponnent({id, race, navigation}) {
        switch(id){
            case infos.SubRaces[0].id:
                return <RaceDisplay race={infos.SubRaces[0].Race} id={sub} navigation={navigation} infos={infos.SubRaces[0]}/>
            case infos.SubRaces[1].id:
                return <RaceDisplay race={infos.SubRaces[1].Race} id={sub} navigation={navigation} infos={infos.SubRaces[1]}/>
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
                    onPress={() => {
                        dispatch(reset({value: sub, id: sub}))
                        setSub(id)
                    }}
                >
                    <Text style={{fontSize: 40, fontFamily: "dungeon", textAlign: "center", color: "white"}}>
                        {race}
                    </Text>
                </TouchableOpacity>
            </View>
          );
    }

    console.log("infos: ", infos);
    return (
        <SafeAreaView style={{
            flex: 100,
            backgroundColor: "#032033",
            alignItems: "center", justifyContent: "center",
            width: "100%"
            }}>
            <ScrollView style={{
                backgroundColor: "#032033",
                flex: 80,
                width: "100%"
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
                        {infos.Description}
                    </Text>
                </View>
                <Text style={{fontSize: 50, textAlign: "center", fontFamily: "dungeon", marginTop: 10, color: "white"}}>
                    This class comport several subraces
                </Text>
                <SafeAreaView style={{flex: 1000, flexDirection: "row", marginTop: 10}}>
                    <SubRaceSelec race={infos.SubRaces[0].Race} id={infos.SubRaces[0].id}/>
                    <SubRaceSelec race={infos.SubRaces[1].Race} id={infos.SubRaces[1].id}/>
                    {infos.SubRaces[2] && (<SubRaceSelec race={infos.SubRaces[2].Race} id={infos.SubRaces[2].id}/>)}
                    {infos.SubRaces[3] && (<SubRaceSelec race={infos.SubRaces[3].Race} id={infos.SubRaces[3].id}/>)}
                </SafeAreaView>
                <SubRaceComponnent race={race} id={sub} navigation={navigation}/>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SubRace;
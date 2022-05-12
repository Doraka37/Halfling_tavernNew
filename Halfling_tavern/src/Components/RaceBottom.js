import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {
    Text,
    View,
    TouchableOpacity
  } from 'react-native';
import { addLanguages, addSpeed, addProficiencies, addStats, addAbilities } from '../../Store/Reducers/baseReducer';

function RaceBottom({id, race, navigation, infos}) {
    const character = useSelector((state) => state.character)
    const dispatch = useDispatch()
    const [raceBool, setRaceBool] = useState([])
    return (
        <View style={{
            backgroundColor: "#330606",
            alignItems: "center", justifyContent: "center",
            width: 400,
            height: 80
        }}>
            <TouchableOpacity style={{
                    backgroundColor: "#330606",
                    width: "80%",
                }}
                onPress={() => {
                    console.log("character: ", character);
                    let tmpRace = raceBool
                    while (tmpRace.length < id + 1) {
                        tmpRace.push(false)
                    }
                    if (raceBool[id] == false) {
                        tmpRace[id] = true
                        dispatch(addLanguages({value: infos.Languages, id: id}))
                        dispatch(addSpeed({value: infos.Speed, id: id}))
                        dispatch(addStats({value: infos.AbilityScore, id: id}))
                        dispatch(addProficiencies({value: infos.Proficiencies, id: id}))
                        let abilities = []
                        for (let index = 0; index < infos.Abilities.length; index++) {
                            if (infos.Abilities[index].level == 1)
                                abilities.push(infos.Abilities[index])
                        }
                        dispatch(addAbilities({value: abilities, id: id}))
                    }
                    setRaceBool(tmpRace)
                    navigation.navigate('Class', {
                        race: race,
                        raceId: id
                })}
            }>
                <View style={{
                    backgroundColor: "#330606",
                    width: "100%",
                }}>
                    <Text style={{fontSize: 60, fontFamily: "dungeon", marginTop: -10, textAlign: "center", color: "white"}}>
                        Pick this race
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default RaceBottom;
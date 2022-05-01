import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {
    Text,
    View,
    TouchableOpacity
  } from 'react-native';
import { addLanguages, addSpeed } from '../../Store/Reducers/baseReducer';

function RaceBottom({id, race, navigation, infos}) {
    const character = useSelector((state) => state.character)
    const dispatch = useDispatch()
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
                    console.log("character: ", character);
                    dispatch(addLanguages(infos.Languages))
                    dispatch(addSpeed(infos.Speed))
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
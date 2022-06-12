import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {
    Text,
    View,
    TouchableOpacity
  } from 'react-native';
import { backgroundAddLanguages, backgroundAddProficiencies, backgroundAddAbilities, backgroundAddEquipments, setBackgroundId } from '../../Store/Reducers/backgroundReducer';

function CharacteristicsBottom({id, navigation, infos}) {
    const backInfos = useSelector((state) => state.background)
    const dispatch = useDispatch()
    const [backBool, setBackBool] = useState([])
    return (
        <View style={{
            backgroundColor: "#330606",
            alignItems: "center", justifyContent: "center",
            width: 400,
            height: 80,
            marginTop: "5%"
        }}>
            <TouchableOpacity style={{
                    backgroundColor: "#330606",
                    width: "80%",
                }}
                onPress={() => {
                    console.log("backInfos: ", JSON.stringify(backInfos));
                    let tmpBackground = backBool
                    while (tmpBackground.length < id + 1) {
                        tmpBackground.push(false)
                    }
                    if (backBool[id] == false) {
                        tmpBackground[id] = true

                    }
                    dispatch(setBackgroundId(id))
                    setBackBool(tmpBackground)
                    navigation.navigate('Physics')
                }
            }>
                <View style={{
                    backgroundColor: "#330606",
                    width: "100%",
                }}>
                    <Text style={{fontSize: 50, fontFamily: "dungeon", marginTop: -10, textAlign: "center", color: "white"}}>
                        Pick this background
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default CharacteristicsBottom;
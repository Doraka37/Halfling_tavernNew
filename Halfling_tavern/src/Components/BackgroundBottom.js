import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {
    Text,
    View,
    TouchableOpacity
  } from 'react-native';
import { backgroundAddLanguages, backgroundAddProficiencies, backgroundAddAbilities, backgroundAddEquipments } from '../../Store/Reducers/backgroundReducer';

function BackgroundBottom({id, background, navigation, infos}) {
    const backInfos = useSelector((state) => state.background)
    const dispatch = useDispatch()
    const [backBool, setBackBool] = useState([])
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
                    console.log("backInfos: ", JSON.stringify(backInfos));
                    let tmpBackground = backBool
                    while (tmpBackground.length < id + 1) {
                        tmpBackground.push(false)
                    }
                    if (backBool[id] == false) {
                        tmpBackground[id] = true
                        dispatch(backgroundAddLanguages({value: infos.Languages, id: id}))
                        dispatch(backgroundAddProficiencies({value: infos.Proficiencies, id: id}))
                        let abilities = []
                        for (let index = 0; index < infos.Abilities.length; index++) {
                            if (infos.Abilities[index].level == 1)
                                abilities.push(infos.Abilities[index])
                        }
                        dispatch(backgroundAddAbilities({value: abilities, id: id}))
                        dispatch(backgroundAddEquipments({value: infos.Equipments, id: id}))
                    }
                    setBackBool(tmpBackground)
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

export default BackgroundBottom;
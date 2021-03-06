import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {
    Text,
    View,
    TouchableOpacity
  } from 'react-native';
import { classAddAbilities, classAddEquipment, classAddEquipments, classAddProficiencies } from '../../Store/Reducers/charaReducer';

function ClassBottom({id, clas, navigation, infos}) {
    const classe = useSelector((state) => state.chara.class)
    const dispatch = useDispatch()
    const [classBool, setClassBool] = useState([])
    return (
        <View style={{
            backgroundColor: "#330606",
            alignItems: "center", justifyContent: "center",
            width: "100%",
            marginTop: "2%",
            height: 80
        }}>
            <TouchableOpacity style={{
                    backgroundColor: "#330606",
                    width: "80%",
                }}
                onPress={() => {
                    console.log("character: ", classe);
                    let tmpClass = classBool
                    while (tmpClass.length < id + 1) {
                        tmpClass.push(false)
                    }
                    if (classBool[id] == false) {
                        tmpClass[id] = true
                        dispatch(classAddProficiencies({value: infos.stats.Proficiencies, id: id}))
                        let abilities = []
                        for (let index = 0; index < infos.Abilities.length; index++) {
                            if (infos.Abilities[index].level == 1)
                                abilities.push(infos.Abilities[index])
                        }
                        dispatch(classAddAbilities({value: abilities, id: id}))
                        let equipments = []
                        for (let index = 0; index < infos.Equipments.length; index++) {
                            if (infos.Equipments[index].choice == 0) {
                                for (let i = 0; i < infos.Equipments[index].choices.length; i++) {
                                    equipments.push(infos.Equipments[index].choices[i])
                                }
                            }
                        }
                        dispatch(classAddEquipments({value: equipments, id: id}))
                    }
                    setClassBool(tmpClass)
                    navigation.navigate('Spells', {
                        clas: clas,
                        classId: id,
                        infos: infos
                    })
                }
            }>
                <View style={{
                    backgroundColor: "#330606",
                    width: "100%",
                }}>
                    <Text style={{fontSize: 55, fontFamily: "dungeon", marginTop: -10, textAlign: "center", color: "white"}}>
                        Pick this class
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default ClassBottom;
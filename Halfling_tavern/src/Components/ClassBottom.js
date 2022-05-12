import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {
    Text,
    View,
    TouchableOpacity
  } from 'react-native';
import {addClass} from '../../Store/Reducers/baseReducer'

function ClassBottom({clas, navigation, infos}) {
    const classe = useSelector((state) => state.chara.class)
    const dispatch = useDispatch()
    return (
        <View style={{
            flex: 0.1,
            backgroundColor: "#330606",
            alignItems: "center", justifyContent: "center",
            width: "100%",
            marginTop: "2%"
        }}>
            <TouchableOpacity style={{
                    backgroundColor: "#330606",
                    width: "80%",
                }}
                onPress={() => {
                    console.log("classe: ", classe);
                    for (let index = 0; index < classe.length; index++) {
                        console.log("classe: ", classe[index]);
                    }
                    let proficiencies = infos.stats.Proficiencies
                    let savings = infos.stats.savings
                    let abilities = []
                    for (let index = 0; index < infos.Abilities.length; index++) {
                        abilities.push(infos.Abilities[index].title)
                    }
                    //dispatch(addClass({proficiencies: proficiencies, savings: savings, clas: clas, abilities: abilities}))
                }
            }>
                <View style={{
                    backgroundColor: "#330606",
                    width: "100%",
                }}>
                    <Text style={{fontSize: 55, fontFamily: "dungeon", marginTop: -10, textAlign: "center", color: "white"}}>
                        Choisir cette classe
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default ClassBottom;
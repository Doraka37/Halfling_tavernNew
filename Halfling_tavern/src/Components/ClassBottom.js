import React from 'react';
import Store from '../../Store/configureStore';

import {
    Text,
    View,
    TouchableOpacity
  } from 'react-native';

function ClassBottom({clas, navigation}) {
    const store = Store.getState();
    console.log("store: ", store);
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
                    console.log("store: ", store);
                    console.log("setting class: ", clas)
                    let action = {
                        type: 'SET_CLASS',
                        value: clas
                    };
                    Store.dispatch(action);
                    /*navigation.navigate('Class', {
                        race: race,
                        raceId: id
                    })*/
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
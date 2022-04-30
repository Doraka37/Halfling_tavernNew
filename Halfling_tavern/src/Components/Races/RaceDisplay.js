import React from 'react';
import {
    View,
    ScrollView,
    FlatList
  } from 'react-native';

import Box from '../BoxComponnent';
import ChoiceBox from '../ChoiceBoxComponnent';
import RaceBottom from '../RaceBottom';
import RaceTop from './RaceTop';
import { choicesToList } from '../../services/utils';

var imageList = [require("../../../Ressources/Half-Elf.png")]
function RaceDisplay({id, race, navigation, infos}) {
    function renderItem({item}) {
        if (item.choice != 0) {
            return (
                <ChoiceBox title={item.title} desc={item.description} nb={item.choice} choices={choicesToList(item.choices)} />
            );
        } else {
            return (
                <Box title={item.title} desc={item.description}/>
            );
        }           
    }
    
    return (
        <View style={{
            flex: 100,
            backgroundColor: "#032033",
            alignItems: "center", justifyContent: "center",
            }}>
            <ScrollView style={{
                    backgroundColor: "#032033",
                    flex: 90,
                    marginBottom: "2%"
                }}
            >
                <RaceTop race={race} image={imageList[infos.id]} description={infos.Description} />
                <FlatList
                    data={infos.Abilities}
                    renderItem={renderItem}
                    keyExtractor={item => item.title}
                />
            </ScrollView>
            <RaceBottom race={race} id={id} navigation={navigation}/>
        </View>
    );
}

export default RaceDisplay;
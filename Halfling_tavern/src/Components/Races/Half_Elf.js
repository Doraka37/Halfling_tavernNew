import React from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    FlatList
  } from 'react-native';

import Box from '../BoxComponnent';
import ChoiceBox from '../ChoiceBoxComponnent';
import RaceBottom from '../RaceBottom';
import infos from "../../../Ressources/jsons/half_elf.json"
import skills from "../../../Ressources/jsons/skillList.json"
import RaceTop from './RaceTop';
import ChoiceBoxList from '../ChoiceBoxComponnentList';
import { choicesToList } from '../../services/utils';

var Image_array = [require("../../../Ressources/Half-Elf.png"), require("../../../Ressources/human.jpg"), require("../../../Ressources/dwarf.jpg"), require("../../../Ressources/gnome.png")]

function Half_Elf({id, race, navigation}) {
    let list = choicesToList(infos.AbilityScore.choices)

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
                <RaceTop race={race} image={require("../../../Ressources/Half-Elf.png")} description={" Half-elves combine what some say are the best qualities of their elf and human parents."} />
                <ChoiceBox title={infos.AbilityScore.title} desc={infos.AbilityScore.description} nb={infos.AbilityScore.choice} choices={list} type={infos.AbilityScore.type}/>
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

export default Half_Elf;
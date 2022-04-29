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
import RaceTop from './RaceTop';

var Image_array = [require("../../../Ressources/Half-Elf.png"), require("../../../Ressources/human.jpg"), require("../../../Ressources/dwarf.jpg"), require("../../../Ressources/gnome.png")]

function Half_Elf({id, race, navigation}) {
    function renderItem({item}) {
        return (
            <Box title={item.title} desc={item.description}/>
        );
    }
    
    return (
        <View style={{
            flex: 100,
            backgroundColor: "#032033",
            alignItems: "center", justifyContent: "center",
            }}>
            <ScrollView style={{
                    backgroundColor: "#032033",
                    flex: 80,
                }}
            >
                <RaceTop race={race} image={require("../../../Ressources/Half-Elf.png")} description={" Half-elves combine what some say are the best qualities of their elf and human parents."} />
                <Box title={infos.AbilityScore.title} desc={infos.AbilityScore.description}/>
                <FlatList
                    data={infos.Abilities}
                    renderItem={renderItem}
                    keyExtractor={item => item.title}
                />
                <Box title={"Skill Versatility"} desc={"You gain proficiency in two skills of your choice."}/>
                <ChoiceBox title={"Languages"} desc={"You can speak, read, and write Common, Elvish, and one extra language of your choice."} nb={1} choices={[{label: 'French', value: 'French'}, {label: 'ENglidh', value: 'ENglidh'}]}/>
            </ScrollView>
            <RaceBottom race={race} id={id} navigation={navigation}/>
        </View>
    );
}

export default Half_Elf;
import React from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    FlatList
  } from 'react-native';

import Box from '../BoxComponnent';
import BoxList from '../BoxComponnentList';
import ChoiceBoxList from '../ChoiceBoxComponnentList';
import ClassBottom from '../ClassBottom';
import infos from "../../../Ressources/jsons/barbarian.json"
import { choicesToList } from '../../services/utils';
import ClassTop from './ClassTop';

var Image_array = [require("../../../Ressources/Half-Elf.png"), require("../../../Ressources/human.jpg"), require("../../../Ressources/dwarf.jpg"), require("../../../Ressources/gnome.png")]

function Barbarian({clas, race, navigation}) {
    let list = choicesToList(infos.Proficiencies.choices)

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
                flex: 80
            }}>
            <ClassTop race={race} clas={clas} image={require("../../../Ressources/guerrier.jpg")} description={"A fierce warrior of primitive background who can enter a battle rage"} stats={infos.stats} races={infos.races}/>
            <FlatList
                data={infos.Abilities}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />
            <BoxList title={infos.HitPoints.title} desc={infos.HitPoints.description}/>
            <ChoiceBoxList title={infos.Proficiencies.title} desc={infos.Proficiencies.description} nb={infos.Proficiencies.choice} choices={list} type={infos.Proficiencies.type}/>
            </ScrollView>
            <ClassBottom clas={clas} navigation={navigation} infos={infos}/>
        </View>
    );
}

export default Barbarian;
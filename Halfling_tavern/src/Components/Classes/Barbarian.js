import React from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
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
                <Box title={infos.rage.title} desc={infos.rage.description}/>
                <Box title={infos.UnarmoredDefense.title} desc={infos.UnarmoredDefense.description}/>
                <Box title={infos.RecklessAttack.title} desc={infos.RecklessAttack.description}/>
                <BoxList title={infos.HitPoints.title} desc={infos.HitPoints.description}/>
                <ChoiceBoxList title={infos.Proficiencies.title} desc={infos.Proficiencies.description} nb={infos.Proficiencies.choice} choices={list} type={infos.Proficiencies.type}/>
            </ScrollView>
            <ClassBottom clas={clas} navigation={navigation}/>
        </View>
    );
}

export default Barbarian;
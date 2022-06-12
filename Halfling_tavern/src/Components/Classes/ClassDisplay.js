import React from 'react';
import {
    View,
    ScrollView,
    FlatList
  } from 'react-native';

import Box from '../BoxComponnent';
import BoxList from '../BoxComponnentList';
import ChoiceBoxList from '../ChoiceBoxComponnentList';
import ChoiceBox from '../ChoiceBoxComponnent';
import ClassBottom from '../ClassBottom';
import { choicesToList } from '../../services/utils';
import ClassTop from './ClassTop';
import EquipmentsChoice from '../EquipmentsChoice';

var imageList = [require("../../../Ressources/guerrier.jpg"), require("../../../Ressources/wizard.jpg")]
function ClassDisplay({clas, race, navigation, infos, id}) {
    let list = choicesToList(infos.Proficiencies.choices)

    let listArray = []

    for (let index = 0; index < infos.Equipments.length; index++) {
        const element = choicesToList(infos.Equipments[index].choices)
        listArray.push({choices: element, choice: infos.Equipments[index].choice})
        
    }
    function renderItem({item}) {
        if (item.choice != 0 && item.choices) {
            const list = choicesToList(item.choices)
            return (
                <ChoiceBox title={item.title} desc={item.description} nb={item.choice} choices={list} type={item.type} id={id} step={"class"}/>
            );
        } else {
            return (
                <Box extended={true} title={item.title} desc={item.description}/>
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
                flex: 80
            }}>
                <ClassTop race={race} clas={clas} image={imageList[infos.id]} description={infos.Description} stats={infos.stats} races={infos.races}/>
                <FlatList
                    data={infos.Abilities}
                    renderItem={renderItem}
                    keyExtractor={item => item.title}
                />
                <BoxList title={infos.HitPoints.title} desc={infos.HitPoints.description}/>
                <ChoiceBoxList title={infos.Proficiencies.title} desc={infos.Proficiencies.description} nb={infos.Proficiencies.choice} choices={list} type={infos.Proficiencies.type} step={"class"} id={id}/>
                <EquipmentsChoice equipments={infos.Equipments} list={listArray} id={id}/>
            </ScrollView>
            <ClassBottom clas={clas} navigation={navigation} infos={infos} id={infos.id}/>
        </View>
    );
}

export default ClassDisplay;
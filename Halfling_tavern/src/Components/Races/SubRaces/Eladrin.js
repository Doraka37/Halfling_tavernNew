import React from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
  } from 'react-native';

import Box from '../../BoxComponnent';
import ChoiceBox from '../../ChoiceBoxComponnent';
import RaceBottom from '../../RaceBottom';

var Image_array = [require("../../../../Ressources/Half-Elf.png"), require("../../../../Ressources/human.jpg"), require("../../../../Ressources/dwarf.jpg"), require("../../../../Ressources/gnome.png")]

function Eladrin({id, race, navigation}) {
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
                contentContainerStyle={{alignItems: "center", justifyContent: "center",}}>
                <Image
                    style={{width: '100%', resizeMode: "contain"}}
                    source={Image_array[id]}
                />
                <Text style={{fontSize: 60, textAlign: "center", fontFamily: "dungeon", marginTop: 20, color: "white"}}>
                    {race}
                </Text>
                <View style={{
                    width: "100%",
                    alignItems: "center", justifyContent: "center", marginBottom: 20
                }}>
                    <Text style={{fontSize: 30, textAlign: "center", fontFamily: "dungeon", marginTop: 20, textAlign: "center", color: "white"}}>
                        Half-elves combine what some say are the best qualities of their elf and human parents.
                    </Text>
                </View>
                <Box title={"Ability Score Increase"} desc={"Your Charisma score increases by 2, and two other ability scores of your choice increase by 1."}/>
                <Box title={"Darkvision"} desc={"Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."}/>
                <Box title={"Fey Ancestry"} desc={"You have advantage on saving throws against being charmed, and magic can’t put you to sleep."}/>
                <Box title={"Skill Versatility"} desc={"You gain proficiency in two skills of your choice."}/>
                {//<ChoiceBox title={"Languages"} desc={"You can speak, read, and write Common, Elvish, and one extra language of your choice."}/>
                }
                <RaceBottom race={race} id={id} navigation={navigation}/>
            </ScrollView>
        </View>
    );
}

export default Eladrin;
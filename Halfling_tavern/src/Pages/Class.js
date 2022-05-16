import React from 'react';
import {
    Text,
    View,
    Dimensions,
  } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ClassDisplay from '../Components/Classes/ClassDisplay';
import infosBarbarian from "../../Ressources/jsons/barbarian.json"
import infosWizard from "../../Ressources/jsons/wizard.json"

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
import list from "../../Ressources/class_array.json"

export function TextComp({title, desc}) {
    return (
        <View style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "row",
            marginTop: -15
        }}>
            <Text style={{fontSize: 40, textAlign: "center", fontFamily: "dungeon", textAlign: "center", color: "white"}}>
                {title}
            </Text>
            <Text style={{fontSize: 30, textAlign: "center", fontFamily: "dungeon", textAlign: "center", marginTop: 5, padding: 10, color: "white"}}>
                {desc}
            </Text>
        </View>
    );
}

function ClassComponnent({clas, race, navigation, raceId}) {
    switch(clas){
        case "Barbarian":
            return <ClassDisplay race={race} clas={clas} navigation={navigation} infos={infosBarbarian} id={0}/>
        case "Sorcier":
            return <ClassDisplay race={race} clas={clas} navigation={navigation} infos={infosWizard} id={1}/>
        default:
            return <View style={{
                backgroundColor: "#330606",
                width: "100%",
            }}>
                <Text style={{fontSize: 60, fontFamily: "dungeon", marginTop: -10, textAlign: "center"}}>
                    Choisir cette race3
                </Text>
            </View>
    }
}

export function Class(props) {
    var race = props.route.params.race;
    var raceId = props.route.params.raceId;

    return (
      <View style={{
        flex: 100
    }}>
        <Carousel
            style={{flex: 100}}
            data={list[raceId]}
            keyExtractor={(item) => item.id}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            renderItem={({ item }) => (
                <ClassComponnent clas={item} race={race} navigation={props.navigation} raceId={raceId}/>
            )}
        />
      </View>
    );
  }

export default Class;
import React from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Dimensions,
    Image,
    FlatList,
    TouchableOpacity
  } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Box from '../Components/BoxComponnent';
import Barbarian from '../Components/Classes/Barbarian';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
import list from "../../Ressources/class_array.json"

var array = [{id: 0, clas: "Guerrier"}, {id: 1, clas: "Sorcier"}, {id: 2, clas: "Barde"}, {id: 3, clas: "Rodeur"}]

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

function ClassComponnent({clas, race, navigation}) {
    switch(clas){
        case "Barbarian":
            return <Barbarian race={race} clas={clas} navigation={navigation}/>
        case "Sorcier":
            return <Barbarian race={race} clas={clas} navigation={navigation}/>
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
            data={list[0]}
            keyExtractor={(item) => item.id}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            renderItem={({ item }) => (
                <ClassComponnent clas={item} race={race} navigation={props.navigation}/>
            )}
        />
      </View>
    );
  }

export default Class;
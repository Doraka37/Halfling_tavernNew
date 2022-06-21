import React from 'react';
import {
    Text,
    View,
    Dimensions,
  } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ClassDisplay from '../Components/Classes/ClassDisplay';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

import { list } from "../../Ressources/class_array"
import { useDispatch } from 'react-redux'
import { setRaceId } from '../../Store/Reducers/charaReducer';
import { choicesToList } from '../services/utils';

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

function ClassComponnent({clas, race, navigation, raceId, infos, id}) {
    let listChoice = choicesToList(infos.Proficiencies.choices)
    return <ClassDisplay race={race} clas={clas} navigation={navigation} infos={infos} id={id} listChoice={listChoice}/>
}

export function Class(props) {
    var race = props.route.params.race;
    var raceId = props.route.params.raceId;
    const dispatch = useDispatch()

    dispatch(setRaceId(raceId))
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
            renderItem={({ item, index }) => (
                <ClassComponnent clas={item.clas} race={race} navigation={props.navigation} raceId={raceId} infos={item.infos} id={index}/>
            )}
        />
      </View>
    );
  }

export default Class;
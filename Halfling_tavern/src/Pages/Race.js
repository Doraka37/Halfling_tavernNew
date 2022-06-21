import React ,{ useState } from 'react';
import {
    View,
    Dimensions,
  } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { RaceComponnent } from '../Components/RaceComponnent';
import half_elf from "../../Ressources/jsons/half_elf.json"
import human from "../../Ressources/jsons/human.json"
import elf from "../../Ressources/jsons/elf.json"
import dwarf from "../../Ressources/jsons/dwarf.json"

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

var array = [{id: 0, race: "Half-Elf", subrace: false, infos: half_elf}, {id: 1, race: "Elf", subrace: true, infos: elf}, {id: 1, race: "Dwarf", subrace: true, infos: dwarf}, {id: 0, race: "Human", subrace: false, infos: human}]

export function Race(props) {

    return (
      <View style={{
        flex: 100
    }}>
        <Carousel
            style={{flex: 100}}
            data={array}
            keyExtractor={(item) => item.id}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            renderItem={({ item }) => (
                <RaceComponnent race={item.race} id={item.id} navigation={props.navigation} infos={item.infos} subrace={item.subrace}/>
            )}
        />
      </View>
    );
  }

export default Race;
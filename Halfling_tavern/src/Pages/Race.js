import React ,{ useState } from 'react';
import {
    View,
    Dimensions,
  } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { RaceComponnent } from '../Components/RaceComponnent';
import half_elf from "../../Ressources/jsons/half_elf.json"

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

var array = [{id: 0, race: "Half-Elf", infos: half_elf}, {id: 1, race: "Elf", infos: half_elf}, {id: 2, race: "Dwarf", infos: half_elf}, {id: 3, race: "Gnome", infos: half_elf}]

export function Race(props) {
    const [resete, setReset] = useState(false);

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
                <RaceComponnent race={item.race} id={item.id} navigation={props.navigation} reset={resete} setReset={setReset} infos={item.infos}/>
            )}
        />
      </View>
    );
  }

export default Race;
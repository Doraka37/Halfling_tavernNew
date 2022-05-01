import React from 'react';
import {
    View,
    Dimensions,
  } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { RaceComponnent } from '../Components/RaceComponnent';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

var array = [{id: 0, race: "Half-Elf"}, {id: 1, race: "Elf"}, {id: 2, race: "Dwarf"}, {id: 3, race: "Gnome"}]

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
                <RaceComponnent race={item.race} id={item.id} navigation={props.navigation}/>
            )}
        />
      </View>
    );
  }

export default Race;
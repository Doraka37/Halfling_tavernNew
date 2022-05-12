import React ,{ useState } from 'react';
import {
    View,
    Dimensions,
  } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { RaceComponnent } from '../Components/RaceComponnent';
import { useSelector, useDispatch } from 'react-redux'
import { reset } from '../../Store/Reducers/baseReducer';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

var array = [{id: 0, race: "Half-Elf"}, {id: 1, race: "Elf"}, {id: 2, race: "Dwarf"}, {id: 3, race: "Gnome"}]

export function Race(props) {
    const dispatch = useDispatch()
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
                <RaceComponnent race={item.race} id={item.id} navigation={props.navigation} reset={resete} setReset={setReset}/>
            )}
            onSnapToItem={() => {
               //dispatch(reset())
              //setReset(true)
            }}
        />
      </View>
    );
  }

export default Race;
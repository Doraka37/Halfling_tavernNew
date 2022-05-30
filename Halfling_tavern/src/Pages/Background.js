import React ,{ useState } from 'react';
import {
    View,
    ScrollView,
    FlatList,
    Text,
    Dimensions,
} from 'react-native';
import Box from '../Components/BoxComponnent';
import BoxList from '../Components/BoxComponnentList';
import ChoiceBox from '../Components/ChoiceBoxComponnent';
import Carousel from 'react-native-snap-carousel';
import { choicesToList } from '../services/utils';

import infosCriminal from "../../Ressources/jsons/criminal.json"

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
var array = [{id: 0, race: "Half-Elf", infos: infosCriminal}, {id: 1, race: "Elf", infos: infosCriminal}, {id: 2, race: "Dwarf", infos: infosCriminal}, {id: 3, race: "Gnome", infos: infosCriminal}]

export function BackgroundDisplay({navigation, infos, id}) {

    function renderItem({item}) {
      if (item.choice != 0 && item.choices) {
          const list = choicesToList(item.choices)
          return (
              <ChoiceBox title={item.title} desc={item.description} nb={item.choice} choices={list} type={item.type} id={id} step={"class"}/>
          );
      } else {
          return (
              <Box title={item.title} desc={item.description}/>
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
            <Text style={{fontSize: 60, textAlign: "center", fontFamily: "dungeon", marginTop: 20, color: "white"}}>
                {infos.Name}
            </Text>
            <View style={{
              width: "100%",
              alignItems: "center", justifyContent: "center", marginBottom: 20
            }}>
              <Text style={{fontSize: 30, textAlign: "center", fontFamily: "dungeon", marginTop: 20, textAlign: "center", color: "white"}}>
                {infos.Description}
              </Text>
            </View>
            <FlatList
              data={infos.Abilities}
              renderItem={renderItem}
              keyExtractor={item => item.title}
            />
            {<BoxList title={infos.Display.title} desc={infos.Display.description}/>}
          </ScrollView>
      </View>
    );
  }

  export function Background(props) {

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
            renderItem={({item}) => (
                <BackgroundDisplay navigation={props.navigation} infos={item.infos} id={item.id}/>
            )}
        />
      </View>
    );
  }
export default Background;
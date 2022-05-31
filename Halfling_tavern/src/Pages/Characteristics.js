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
import BackgroundBottom from '../Components/BackgroundBottom';
import ChoiceBoxRoll from '../Components/ChoiceBoxComponnentRoll';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
var array = [{id: 0, race: "Half-Elf", infos: infosCriminal}, {id: 1, race: "Elf", infos: infosCriminal}, {id: 2, race: "Dwarf", infos: infosCriminal}, {id: 3, race: "Gnome", infos: infosCriminal}]

export function Characteristics(props) {
  var id = props.route.params.id;
  var infos = props.route.params.infos;

    function renderItem({item}) {
      if (item.choice != 0 && item.choices) {
          const list = choicesToList(item.choices)
          return (
              <ChoiceBox title={item.title} desc={item.description} nb={item.choice} choices={list} type={item.type} id={id} step={"background"}/>
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
            <Text style={{fontSize: 50, textAlign: "center", fontFamily: "dungeon", marginTop: 20, color: "white"}}> 
              Define yout character personality
            </Text>
            <ChoiceBoxRoll title={"Specialty"} desc={infos.Specialty.description} choices={choicesToList(infos.Specialty.choices)} type={"Specialty"} id={id} step={"background"}/>
            <Text style={{fontSize: 30, textAlign: "center", fontFamily: "dungeon", marginTop: 20, color: "white"}}> 
              {infos.Characteristics.description} 
            </Text>
            <ChoiceBoxRoll title={"Personality"} desc={""} choices={choicesToList(infos.Characteristics.PersonalityTrait)} type={"Personality"} id={id} step={"background"}/>
            <ChoiceBoxRoll title={"Ideal"} desc={""} choices={choicesToList(infos.Characteristics.Ideal)} type={"Ideal"} id={id} step={"background"}/>
            <ChoiceBoxRoll title={"Bond"} desc={""} choices={choicesToList(infos.Characteristics.Bond)} type={"Bond"} id={id} step={"background"}/>
            <ChoiceBoxRoll title={"Flaw"} desc={""} choices={choicesToList(infos.Characteristics.Flaw)} type={"Flaw"} id={id} step={"background"}/>
          </ScrollView>
          <BackgroundBottom id={id} infos={infos}/>
      </View>
    );
  }

export default Characteristics;
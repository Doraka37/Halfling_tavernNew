import React from 'react';
import {
    View,
    ScrollView,
    Text
} from 'react-native';

import { choicesToList } from '../services/utils';

import ChoiceBoxRoll from '../Components/ChoiceBoxComponnentRoll';
import CharacteristicsBottom from '../Components/CharacteristicsBottom';

export function Characteristics(props) {
  var id = props.route.params.id;
  var infos = props.route.params.infos;


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
          <CharacteristicsBottom id={id} infos={infos} navigation={props.navigation}/>
      </View>
    );
  }

export default Characteristics;
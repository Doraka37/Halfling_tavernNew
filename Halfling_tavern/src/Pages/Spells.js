import React from 'react';
import {
    View,
    ScrollView,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';

import { choicesToList } from '../services/utils';

import ChoiceBoxRoll from '../Components/ChoiceBoxComponnentRoll';
import CharacteristicsBottom from '../Components/CharacteristicsBottom';
import ChoiceBox from '../Components/ChoiceBoxComponnent';
import Box from '../Components/BoxComponnent';
import spellsList from '../../Ressources/jsons/spells.json'
import SpellChoice from '../Components/SpellChoice';

export function Spells(props) {
  var classId = props.route.params.classId;
  var infos = props.route.params.infos;
  var clas = props.route.params.clas;

    function renderItem({item}) {
      if (item.SpellInfos) {
          const result = spellsList.Spells.filter(spells => (spells.level == item.SpellInfos.level && spells.class.includes(item.SpellInfos.classes.toString())));
          return (
            <SpellChoice spellList={result} nb={item.choice} name={item.title} id={classId}/>
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
              Chose your character spells
            </Text>
            <FlatList
                    data={infos.Abilities}
                    renderItem={renderItem}
                    keyExtractor={item => item.title}
                />
          </ScrollView>
          <TouchableOpacity style={{
                    backgroundColor: "#330606",
                    width: "100%",
                    height: "8%"
                }}
                onPress={() => {
                    props.navigation.navigate('Stats', {
                        clas: clas,
                        classId: classId
                    })
                }
            }>
                <View style={{
                    backgroundColor: "#330606",
                    width: "100%",
                }}>
                    <Text style={{fontSize: 55, fontFamily: "dungeon", marginTop: "1%", textAlign: "center", color: "white"}}>
                        Validate
                    </Text>
                </View>
            </TouchableOpacity>
      </View>
    );
  }

export default Spells;
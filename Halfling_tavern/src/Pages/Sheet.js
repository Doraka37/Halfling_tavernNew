import React ,{ useState } from 'react';
import {
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    TextInput,
    FlatList
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

import { useSelector, useDispatch } from 'react-redux'
import { backgroundSetAlignment, backgroundSetLifestyle, backgroundSetTraits } from '../../Store/Reducers/backgroundReducer';
import desc from "../../Ressources/jsons/aligments.json"
import Box from '../Components/BoxComponnent';
import BoxEquipment from '../Components/BoxEquipment';
import BoxStats from '../Components/BoxStats';
import BoxTraits from '../Components/BoxTraits';
import BoxPhysics from '../Components/BoxPhysics';

export function Sheet(props) {

    const backInfos = useSelector((state) => state.background)
    const dispatch = useDispatch()
    const [sub, setSub] = useState(0)

    const raceId = useSelector((state) => state.chara.raceId)
    const classId = useSelector((state) => state.chara.classId)
    const backgroundId = useSelector((state) => state.background.backgroundId)
    const raceInfos = useSelector((state) => state.race.character[raceId])
    const classInfos = useSelector((state) => state.chara.class[classId])
    const charaInfos = useSelector((state) => state.background.background[backgroundId])
    
    console.log("classInfos: ", classInfos);
    console.log("raceInfos: ", raceInfos);
    console.log("charaInfos: ", charaInfos);

    let abilities = classInfos.abilities.concat(raceInfos.abilities)
    abilities = abilities.concat(charaInfos.abilities)
    let spells = classInfos.spells
    let equipments = classInfos.equipments.concat(charaInfos.equipments)
    let stats = useSelector((state) => state.chara.abilityScore)
    let proficiencies = classInfos.proficiencies.concat(raceInfos.proficiencies)
    proficiencies = proficiencies.concat(charaInfos.proficiencies)
    let personality = charaInfos.personality
    let alignement =  useSelector((state) =>state.background.alignment)
    let lifestyle =  useSelector((state) =>state.background.lifestyle)
    let physics = useSelector((state) =>state.background.traits)

    function renderItem({item}) {
      return (
          <Box extended={false} title={item.title} desc={item.description}/>
      );
    }

    function renderSpells({item}) {
      return (
          <Box extended={false} title={item.name} desc={item.desc}/>
      );
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
              Character Sheet
            </Text>
            <Text style={{fontSize: 50, textAlign: "center", fontFamily: "dungeon", marginTop: 20, color: "white"}}> 
              Your character abilities:
            </Text>
            <FlatList
                data={abilities}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />
            <Text style={{fontSize: 50, textAlign: "center", fontFamily: "dungeon", marginTop: 20, color: "white"}}> 
              Your character profieciencies:
            </Text>
            <BoxEquipment equipments={proficiencies} extended={false} title={"Proficiencies:"}/>
            <Text style={{fontSize: 50, textAlign: "center", fontFamily: "dungeon", marginTop: 20, color: "white"}}> 
              Your character spells:
            </Text>
            <FlatList
                data={spells}
                renderItem={renderSpells}
                keyExtractor={item => item.name}
            />
            <Text style={{fontSize: 50, textAlign: "center", fontFamily: "dungeon", marginTop: 20, color: "white"}}> 
              Your character equipment:
            </Text>
            <BoxEquipment equipments={equipments} extended={false} title={"Equipments:"}/>
            <Text style={{fontSize: 50, textAlign: "center", fontFamily: "dungeon", marginTop: 20, color: "white"}}> 
              Your character stats:
            </Text>
            <BoxStats stats={stats} extended={false}/>
            <Text style={{fontSize: 50, textAlign: "center", fontFamily: "dungeon", marginTop: 20, color: "white"}}> 
              Your character traits:
            </Text>
            <BoxTraits personality={personality} extended={false} lifestyle={lifestyle} alignement={alignement}/>
            <BoxPhysics physics={physics} extended={false}/>
          </ScrollView>
      </View>
    );
  }

export default Sheet;
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


    function renderItem({item}) {
      return (
          <Box extended={false} title={item.title} desc={item.description}/>
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
            <FlatList
                data={abilities}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />
          </ScrollView>
      </View>
    );
  }

export default Sheet;
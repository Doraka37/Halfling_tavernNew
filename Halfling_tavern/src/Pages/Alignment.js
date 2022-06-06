import React ,{ useState } from 'react';
import {
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    TextInput
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

import { useSelector, useDispatch } from 'react-redux'
import { backgroundSetAlignment, backgroundSetLifestyle, backgroundSetTraits } from '../../Store/Reducers/backgroundReducer';
import desc from "../../Ressources/jsons/aligments.json"

export function Alignment(props) {

    const backInfos = useSelector((state) => state.background)
    const dispatch = useDispatch()
    const [sub, setSub] = useState(0)
    const array = ["Wretched", "Squalid", "Poor", "Modest", "Comfortable", "Wealthy", "Aristocratic"]
    const [lifestyle, setLifestyle] = useState("");
    const [alignment, setAlignment] = useState("");

    function Select({text, id, setAlignment}) {
      let backcolor = "#090F2E"
      if (sub == id) 
          backcolor = "#405BDE"
      return (
          <View style={{
            width: "33%", height: 100, backgroundColor: backcolor, justifyContent: 'center',
            alignItems: 'center', flexDirection: "row", borderWidth: 4,
            borderColor: "#20232a",
          }}>
              <TouchableOpacity
                  onPress={() => {
                      setSub(id)
                      setAlignment(text)
                  }}
              >
                  <Text style={{fontSize: 40, fontFamily: "dungeon", textAlign: "center", color: "white"}}>
                      {text}
                  </Text>
              </TouchableOpacity>
          </View>
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
              Define yout character Physical traits
            </Text>
              <View style={{flex: 1000, flexDirection: "row", marginTop: 10}}>
                <Select setAlignment={setAlignment} text={"LawFul Good"} id={0}/>
                <Select setAlignment={setAlignment} text={"Neutral Good"} id={1}/>
                <Select setAlignment={setAlignment} text={"Chaotic Good"} id={2}/>
              </View>
              <View style={{flex: 1000, flexDirection: "row"}}>
                <Select setAlignment={setAlignment} text={"Lawful Neutral"} id={3}/>
                <Select setAlignment={setAlignment} text={"True Neutral"} id={4}/>
                <Select setAlignment={setAlignment} text={"Chaotic Neutral"} id={5}/>
              </View>
              <View style={{flex: 1000, flexDirection: "row"}}>
                <Select setAlignment={setAlignment} text={"Lawful Evil"} id={6}/>
                <Select setAlignment={setAlignment} text={"Neutral Evil"} id={7}/>
                <Select setAlignment={setAlignment} text={"Chaotic Evil"} id={8}/>
              </View>
              <Text style={{fontSize: 25, textAlign: "center", fontFamily: "dungeon", marginTop: 20, color: "white"}}> 
                {desc.Desc[sub]}
              </Text>
              <Text style={{fontSize: 50, textAlign: "center", fontFamily: "dungeon", marginTop: 20, color: "white"}}> 
                Chose your Lifestyle
              </Text>
              <ModalDropdown
                  style={{backgroundColor: "white", textAlign: "center"}}
                  textStyle={{textAlign: "center", fontSize: 40, fontFamily: "dungeon"}}
                  dropdownStyle={{width: "99%"}}
                  options={array}
                  defaultValue={"---"}
                  onSelect={(index, value) => {
                    setLifestyle(value)
                  }}
              />
          </ScrollView>
          <View style={{
            backgroundColor: "#330606",
            alignItems: "center", justifyContent: "center",
            width: 400,
            height: 80,
            marginTop: "2%"
        }}>
            <TouchableOpacity style={{
                    backgroundColor: "#330606",
                    width: "80%",
                }}
                onPress={() => {
                  console.log("backInfos: ", JSON.stringify(backInfos));
                  dispatch(backgroundSetLifestyle(lifestyle))
                  dispatch(backgroundSetAlignment(alignment))
              }
            }
            >
                <View style={{
                    backgroundColor: "#330606",
                    width: "100%",
                }}>
                    <Text style={{fontSize: 50, fontFamily: "dungeon", marginTop: -10, textAlign: "center", color: "white"}}>
                        Validate
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    );
  }

export default Alignment;
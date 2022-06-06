import React ,{ useState } from 'react';
import {
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    TextInput
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux'
import { backgroundSetTraits } from '../../Store/Reducers/backgroundReducer';

function TraitInput({trait, setTrait, values, id}) {

  return (
    <View>
      <Text style={{fontSize: 40, textAlign: "left", fontFamily: "dungeon", color: "white"}}> 
        {trait}
      </Text>
      <View 
        style={{
          backgroundColor: "white",
        }} 
      >
        <TextInput
          onChangeText={newText => {
            let tmpArray = [...values]
            tmpArray[id] = newText
            setTrait(tmpArray)
          }}
          value={values[id]}
        />
      </View>
  </View>
  );
}

export function Physics(props) {

    const [traits, setTraits] = useState(["", "", "", "", "", "", ""])
    const backInfos = useSelector((state) => state.background)
    const dispatch = useDispatch()
    
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
            <TraitInput trait={"Hair"} setTrait={setTraits} id={0} values={traits}/>
            <TraitInput trait={"Skin"} setTrait={setTraits} id={1} values={traits}/>
            <TraitInput trait={"Eyes"} setTrait={setTraits} id={2} values={traits}/>
            <TraitInput trait={"Height"} setTrait={setTraits} id={3} values={traits}/>
            <TraitInput trait={"Weight"} setTrait={setTraits} id={4} values={traits}/>
            <TraitInput trait={"Age"} setTrait={setTraits} id={5} values={traits}/>
            <TraitInput trait={"Gender"} setTrait={setTraits} id={6} values={traits}/>
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
                  let tmpTraits = {Hair: traits[0], Skin: traits[1], Eyes: traits[2], Height: traits[3], Weight: traits[4], Age: traits[5], Gender: traits[6]}
                  dispatch(backgroundSetTraits(tmpTraits))
                  props.navigation.navigate('Alignment')
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

export default Physics;
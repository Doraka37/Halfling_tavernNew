import React ,{ useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity
  } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useDispatch } from 'react-redux'
import { classAddAbilityScore, classRemoveAbilityScore, classAddLanguage, classRemoveLanguage, classAddSkill, classRemoveSkill, classAddEquipment, classRemoveEquipment } from '../../Store/Reducers/charaReducer';
import { choicesToList } from '../services/utils';

export function EquipmentsChoice({equipments, list, id}) {
    const [refresh, setRefresh] = useState(false);
    const [extend, setExtend] = useState(true);
    const [cmp, setCmp] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
    let tmpCmp = []
        for (let index = 0; index < list.length; index++) {
            tmpCmp.push(0) 
        }
        setCmp(tmpCmp)
    }, [])

    function Check({item, nb, index}) {
    
        return (
            <View style={{flexDirection: "row", marginTop: 10, alignItems: "center"}}>
                <CheckBox
                    value={item.checked}
                    onValueChange={(newValue) => {
                        if (newValue == false) {
                            dispatch(classRemoveEquipment({value: item.label, id: id}))
                            let tmpCmp = cmp
                            tmpCmp[index] = tmpCmp[index] - 1
                            setCmp(tmpCmp)
                        }
                        if (newValue == true) {
                            if (cmp[index] >= nb)
                                return
                            dispatch(classAddEquipment({value: item.label, id: id}))
                            let tmpCmp = cmp
                            tmpCmp[index] = tmpCmp[index] + 1
                            setCmp(tmpCmp)
                        }
                        item.checked = newValue
                        setRefresh(!refresh)
                    }}
                    style={{alignSelf: "flex-start"}}
                    tintColors={{true: "green", false: "orange"}}
                />
                <Text style={styles.Check}> 
                    {item.label}
                </Text>
          </View>
        );
    }

    function renderItem({item, index}) {
        if (item.choice != 0 && item.choices) {
            return (
                <View>
                    <Text style={{fontSize: 40, textAlign: "center", fontFamily: "dungeon", textAlign: "center", color: "#696969"}}> Chose {item.choice} from: </Text>
                    <FlatList
                        data={item.choices}
                        renderItem={item2 => <Check item={item2.item} nb={1} index={index}/>}
                        keyExtractor={item => item.title}
                    />
                </View>
            );
        } else {
            let array = []
            for (let index = 0; index < item.choices.length; index++) {
                array.push(item.choices[index].label)
            }
            return (
                <View>
                    <Text style={{fontSize: 40, textAlign: "center", fontFamily: "dungeon", textAlign: "center", color: "#696969"}}> And:  </Text>
                    <Text style={styles.Check}> 
                        {array.toString()}
                    </Text>
                </View>
            );
        } 
    }

    return (
        <View style={{width: "100%", alignItems: "center", justifyContent: "center", marginTop: 10, marginBottom: 10}}>
            <TouchableOpacity style={{
                    width: "80%",
                    backgroundColor: "grey",
                    alignItems: "center", justifyContent: "center",
                }}
                onPress={() => {
                    setExtend(!extend)
                }}>
                <View>
                        <Text style={{fontSize: 40, textAlign: "center", fontFamily: "dungeon", marginTop: 20, textAlign: "center"}}>
                            Equipments
                        </Text>
                </View>
            </TouchableOpacity>
            {extend == true && (<View style={{
                width: "80%",
                backgroundColor: "#090F2E",
                alignItems: "center", justifyContent: "center",
            }}>
                <FlatList
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={item => item.title}
                />
            </View>)}
        </View>
    );
}

const styles = StyleSheet.create({
    Desc: {
        fontSize: 25,
        textAlign: "center",
        fontFamily: "Libertine",
        color: "black", marginTop: 20,
        textAlign: "center",
        color: "white"
    },
    Check: {
        fontSize: 25,
        textAlign: "center",
        fontFamily: "Libertine",
        color: "white",
        textAlign: "center"
    },
    Title: {
        fontSize: 40,
        textAlign: "center",
        fontFamily: "dungeon",
        marginTop: 20,
        textAlign: "center"
    },
  });

//const mapStateToProps = (state) => state;
//export default connect(mapStateToProps)(ButtonIcon);
export default EquipmentsChoice;
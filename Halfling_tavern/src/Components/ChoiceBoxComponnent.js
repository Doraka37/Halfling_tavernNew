import React ,{ useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity
  } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useDispatch } from 'react-redux'
import { addAbilityScore, removeAbilityScore, addLanguage, removeLanguage, addSkill, removeSkill } from '../../Store/Reducers/baseReducer';

export function ChoiceBox({title, desc, choices, nb, type, id}) {
    const [refresh, setRefresh] = useState(false);
    const [extend, setExtend] = useState(true);
    const [cmp, setCmp] = useState(0);
    const dispatch = useDispatch()

    function Check({item}) {
    
        return (
            <View style={{flexDirection: "row", marginTop: 10, alignItems: "center"}}>
                <CheckBox
                    value={item.checked}
                    onValueChange={(newValue) => {
                        if (newValue == false) {
                            if (type == "Skills")
                                dispatch(removeSkill({value: item.label, id: id}))
                            if (type == "Languages")
                                dispatch(removeLanguage({value: item.label, id: id}))
                            if (type == "AbilityScore")
                                dispatch(removeAbilityScore({value: item.label, id: id}))
                            setCmp(cmp - 1)
                        }
                        if (newValue == true) {
                            if (cmp >= nb)
                                return
                            if (type == "Skills")
                                dispatch(addSkill({value: item.label, id: id}))
                            if (type == "Languages")
                                dispatch(addLanguage({value: item.label, id: id}))
                            if (type == "AbilityScore")
                                dispatch(addAbilityScore({value: item.label, id: id}))
                            setCmp(cmp + 1)
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
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
            {extend == true && <View style={{
                width: "80%",
                backgroundColor: "#090F2E",
                alignItems: "center", justifyContent: "center",
            }}>
                <Text style={{fontSize: 25, textAlign: "center", fontFamily: "Libertine", color: "white", marginTop: 20, textAlign: "center"}}>
                    {desc}
                </Text>
                <FlatList
                    data={choices}
                    renderItem={Check}
                    keyExtractor={item => item.label}
                />
            </View>}
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
export default ChoiceBox;
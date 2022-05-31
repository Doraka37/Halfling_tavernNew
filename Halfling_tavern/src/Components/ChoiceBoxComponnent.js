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
import { classAddAbilityScore, classRemoveAbilityScore, classAddLanguage, classRemoveLanguage, classAddSkill, classRemoveSkill } from '../../Store/Reducers/charaReducer';
import { backgroundAddAbilityScore, backgroundRemoveAbilityScore, backgroundAddLanguage, backgroundRemoveLanguage, backgroundAddSkill, backgroundRemoveSkill } from '../../Store/Reducers/backgroundReducer';

export function ChoiceBox({title, desc, choices, nb, type, id, step}) {
    const [refresh, setRefresh] = useState(false);
    const [extend, setExtend] = useState(true);
    const [cmp, setCmp] = useState(0);
    const dispatch = useDispatch()

    function raceDispatch(newValue, item) {
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
    }

    function classDispatch(newValue, item) {
        if (newValue == false) {
            if (type == "Skills")
                dispatch(classRemoveSkill({value: item.label, id: id}))
            if (type == "Languages")
                dispatch(classRemoveLanguage({value: item.label, id: id}))
            if (type == "AbilityScore")
                dispatch(classRemoveAbilityScore({value: item.label, id: id}))
            setCmp(cmp - 1)
        }
        if (newValue == true) {
            if (cmp >= nb)
                return
            if (type == "Skills")
                dispatch(classAddSkill({value: item.label, id: id}))
            if (type == "Languages")
                dispatch(classAddLanguage({value: item.label, id: id}))
            if (type == "AbilityScore")
                dispatch(classAddAbilityScore({value: item.label, id: id}))
            setCmp(cmp + 1)
        }
        item.checked = newValue
        setRefresh(!refresh)
    }

    function backgroundDispatch(newValue, item) {
        if (newValue == false) {
            if (type == "Skills")
                dispatch(backgroundRemoveSkill({value: item.label, id: id}))
            if (type == "Languages")
                dispatch(backgroundRemoveLanguage({value: item.label, id: id}))
            if (type == "AbilityScore")
                dispatch(backgroundRemoveAbilityScore({value: item.label, id: id}))
            setCmp(cmp - 1)
        }
        if (newValue == true) {
            if (cmp >= nb)
                return
            if (type == "Skills")
                dispatch(backgroundAddSkill({value: item.label, id: id}))
            if (type == "Languages")
                dispatch(backgroundAddLanguage({value: item.label, id: id}))
            if (type == "AbilityScore")
                dispatch(backgroundAddAbilityScore({value: item.label, id: id}))
            setCmp(cmp + 1)
        }
        item.checked = newValue
        setRefresh(!refresh)
    }

    function Check({item}) {
        return (
            <View style={{flexDirection: "row", marginTop: "3%", alignItems: "center"}}>
                <CheckBox
                    value={item.checked}
                    onValueChange={(newValue) => {
                        if (step == "race")
                            raceDispatch(newValue, item)
                        if (step == "class")
                            classDispatch(newValue, item)
                        if (step == "background")
                            backgroundDispatch(newValue, item)
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

export default ChoiceBox;
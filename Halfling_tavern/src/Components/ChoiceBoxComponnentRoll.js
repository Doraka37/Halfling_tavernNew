import React ,{ useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Button
  } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useDispatch } from 'react-redux'
import { backgroundAddAbilityScore, backgroundRemoveAbilityScore, backgroundAddLanguage, backgroundRemoveLanguage, backgroundAddSkill, backgroundRemoveSkill } from '../../Store/Reducers/backgroundReducer';

export function ChoiceBoxRoll({title, desc, choices, type, id, step}) {
    const [refresh, setRefresh] = useState(false);
    const [extend, setExtend] = useState(true);
    const [rolled, setRolled] = useState(false);
    const [cmp, setCmp] = useState(0);
    const dispatch = useDispatch()


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
            if (cmp >= 1)
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
            <View style={{flexDirection: "row", marginTop: "3%", alignItems: "center", width: "90%"}}>
                <CheckBox
                    value={item.checked}
                    onValueChange={(newValue) => {
                        if (step == "background")
                            backgroundDispatch(newValue, item)
                    }}
                    style={{alignSelf: "flex-start"}}
                    tintColors={{true: "green", false: "orange"}}
                />
                <Text style={styles.Check}
                    adjustsFontSizeToFit={true}
                    allowFontScaling={true}
                    numberOfLines={4}
                > 
                    {item.label} 
                </Text>
          </View>
        );
    }

    return (
        <View style={{width: "100%", alignItems: "center", justifyContent: "center", marginTop: 10, margi1ottom: 10}}>
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
                <Button
                    disabled={rolled}
                    onPress={() => {
                       let nbr = Math.floor(Math.random() * choices.length)
                       for (let index = 0; index < choices.length; index++) {
                           choices[index].checked = false
                       }
                       choices[nbr].checked = true
                       setRefresh(!refresh)
                       setCmp(1)
                       setRolled(true)
                    }}
                    style={{with: "100%"}}
                    title="Roll"
                    color="#330606"
                    
                />
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

export default ChoiceBoxRoll;
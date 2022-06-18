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
import { classAddSpell, classRemoveSpell } from '../../Store/Reducers/charaReducer';

export function SpellChoice({nb, spellList, name, id}) {
    const [refresh, setRefresh] = useState(false);
    const [extend, setExtend] = useState([]);
    const [checked, setChecked] = useState([]);
    const [cmp, setCmp] = useState(0);
    const dispatch = useDispatch()

    useEffect(() => {
        let tmpExtend = []
            for (let index = 0; index < spellList.length; index++) {
                tmpExtend.push(false) 
            }
            setExtend(tmpExtend)
            setChecked(tmpExtend)
    }, [])

    function backgroundDispatch(newValue, index, item) {
        if (newValue == false) {
            dispatch(classRemoveSpell({value: item.name, id: id}))
            let tmpCheck = [...checked]
            tmpCheck[index] = newValue
            setChecked(tmpCheck)
            setCmp(cmp - 1)
        }
        if (newValue == true) {
            if (cmp >= nb)
                return
            dispatch(classAddSpell({value: {name: item.name, desc: item.desc}, id: id}))
            let tmpCheck = [...checked]
            tmpCheck[index] = newValue
            setChecked(tmpCheck)
            setCmp(cmp + 1)
        }
        setRefresh(!refresh)
    }

    function renderItem({item, index}) {
        return (
            <View style={{width: "100%", alignItems: "center", justifyContent: "center", marginTop: 10, marginBottom: 10}}>
                <TouchableOpacity style={{
                        width: "80%",
                        backgroundColor: "grey",
                        alignItems: "center", justifyContent: "center",
                    }}
                    onPress={() => {
                        let tmpExtend = [ ...extend]
                        tmpExtend[index] = !tmpExtend[index]
                        setExtend(tmpExtend)
                    }}>
                    <View>
                        <Text style={{fontSize: 40, textAlign: "center", fontFamily: "dungeon", marginTop: 20, textAlign: "center"}}>
                            {item.name}
                        </Text>
                    </View>
                </TouchableOpacity>
                {extend[index] == true && <View style={{
                    width: "80%",
                    backgroundColor: "#090F2E",
                    alignItems: "center", justifyContent: "center"
                }}>
                <Text style={{fontSize: 25, textAlign: "center", fontFamily: "Libertine", color: "white", marginTop: 10, textAlign: "center"}}>
                    {item.desc}
                </Text>
                <CheckBox
                    value={checked[index]}
                    onValueChange={(newValue) => {
                        backgroundDispatch(newValue, index, item)
                    }}
                    style={{alignSelf: "flex-start"}}
                    tintColors={{true: "green", false: "orange"}}
                />
            </View>}
        </View>
        );
    }

    return (
        <View>
            <Text style={{fontSize: 50, textAlign: "center", fontFamily: "dungeon", marginTop: 20, textAlign: "center", color: "white"}}>
                    {name} - Chose {nb} from:
            </Text>
            <FlatList
                data={spellList}
                renderItem={renderItem}
                keyExtractor={item => item.label}
            />
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

export default SpellChoice;
import React, { useState }  from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    SafeAreaView,
    TextInput,
    StyleSheet
  } from 'react-native';
  import { useSelector, useDispatch } from 'react-redux'

function roll() {
    let array = []
    let finalArray = []
    let resultTmp = 0

    for (let i = 0; i < 6; i+= 1) {
        array = []
        for (let j = 0; j < 4; j+= 1) {
            array.push(Math.floor(Math.random() * 6) + 1)
        }
        array.sort(function(a, b) {
            return b - a;
        });
        resultTmp = array[0] + array[1] + array[2]
        finalArray.push(resultTmp)
        console.log(array)
    }
    console.log(finalArray)
}

function pointBuy(array) {
    let point = 27
    let returnValue = 0;
    if (array.length != 6)
        return 42
    array.forEach((item, i) => {
        if (item < 8 || item > 15) {
        returnValue = 42
        }
        if (item == 14)
        point -= 7;
        else if (item == 15)
        point -= 9
        else
        point -= (item - 8)
    });
    if (returnValue != 0) {
        console.log("error")
        return returnValue
    }
    console.log(point)
    return point
}



export function Stats(props) {
    const [sub, setSub] = useState(0);
    const classe = useSelector((state) => state.chara.class)
    const race = useSelector((state) => state.race.character)

    console.log("classe: ", classe);
    console.log("race: ", race);
    function totalStats(number) {
        let tot = 0
        for (let index = 0; index < number.length; index++) {
            tot += Number(number[index])
        }
        console.log("tot: ", tot);
        return tot
    }

    function Select({text, id}) {
        let backcolor = "#090F2E"
        if (sub == id) 
            backcolor = "#405BDE"
        return (
            <View style={{
              width: "33%", height: 50, backgroundColor: backcolor, justifyContent: 'center',
              alignItems: 'center', flexDirection: "row" 
            }}>
                <TouchableOpacity
                    onPress={() => {
                        setSub(id)
                    }}
                >
                    <Text style={{fontSize: 40, fontFamily: "dungeon", textAlign: "center", color: "white"}}>
                        {text}
                    </Text>
                </TouchableOpacity>
            </View>
          );
    }

    function NumberField({setNumber, setRemaining, text, number, id}) {
        return (
            <View style={{flexDirection: "row"}}>
                <View style={styles.input}>
                    <TextInput
                        onChangeText={newText => {
                            let tmpNumber = [...number]
                            tmpNumber[id] = newText
                            setNumber(tmpNumber)
                        }}
                        onSubmitEditing={(event) => {
                            let tmpNumber = [...number]
                            if (Number(tmpNumber[id]) > 15)
                                tmpNumber[id] = "15"
                            if (Number(tmpNumber[id]) < 8)
                                tmpNumber[id] = "8"
                            setNumber(tmpNumber)
                            let tot = pointBuy(tmpNumber)
                            setRemaining(tot)
                        }}
                        value={number[id]}
                        keyboardType="numeric"
                    />
                    <Text style={{fontSize: 40, fontFamily: "dungeon", textAlign: "center", color: "white"}}>
                        {text}
                    </Text>
                </View>
                <View>
                    <Text style={{fontSize: 40, fontFamily: "dungeon", textAlign: "center", color: "white", marginTop: "20%", marginLeft: "5%"}}>
                        + 0 = 
                    </Text>
                </View>
            </View>
          );
    }

    

    function PointBuy({text, id}) {
        const [number, setNumber] = useState(["8", "8", "8", "8", "8", "8"]);
        const [remaining, setRemaining] = useState(27);
        console.log("hello");
        
        return (
            <View style={{
                flex: 100,
                backgroundColor: "#032033",
            }}>
                <Text style={{fontSize: 55, fontFamily: "dungeon", marginTop: -10, textAlign: "center", color: "white"}}>
                        Points Remaining
                </Text>
                <Text style={{fontSize: 55, fontFamily: "dungeon", marginTop: -10, textAlign: "center", color: "white"}}>
                        {remaining}/27
                </Text>
                <NumberField setNumber={setNumber} setRemaining={setRemaining} text={"Strength"} number={number} id={0}/>
                <NumberField setNumber={setNumber} setRemaining={setRemaining} text={"Dexterity"} number={number} id={1}/>
                <NumberField setNumber={setNumber} setRemaining={setRemaining} text={"Constitution"} number={number} id={2}/>
                <NumberField setNumber={setNumber} setRemaining={setRemaining} text={"Intelligence"} number={number} id={3}/>
                <NumberField setNumber={setNumber} setRemaining={setRemaining} text={"Wisdom"} number={number} id={4}/>
                <NumberField setNumber={setNumber} setRemaining={setRemaining} text={"Charisma"} number={number} id={5}/>
            </View>
          );
    }

    function SubStatsComponnent({id}) {
        switch(id){
            case 0:
                return <PointBuy />
            case 1:
                return <PointBuy />
            case 2:
                return <PointBuy />
        }
    }

    return (
        <View style={{
            flex: 100,
            backgroundColor: "#032033",
        }}>
            <SafeAreaView style={{flex: 10, flexDirection: "row", marginTop: 10}}>
                <Select text={"Point Buy"} id={0}/>
                <Select text={"Standard Array"} id={1}/>
                <Select text={"Manual/Rolled"} id={2}/>
            </SafeAreaView>
            <SubStatsComponnent id={sub}/>
        </View>
    );
  }

  const styles = StyleSheet.create({
    input: {
      height: 40,
      width: "35%",
      marginLeft: "5%",
      backgroundColor: "white",
      marginTop: "5%",
      marginBottom: "10%"
    },
  });

export default Stats;
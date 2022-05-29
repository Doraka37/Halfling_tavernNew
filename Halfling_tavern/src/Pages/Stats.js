import React, { useState }  from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    SafeAreaView,
    TextInput,
    StyleSheet,
    Button
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import ModalDropdown from 'react-native-modal-dropdown';

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
    const raceId = useSelector((state) => state.chara.raceId)
    var classId = props.route.params.classId;
    const race = useSelector((state) => state.race.character[raceId])
    const classe = useSelector((state) => state.chara.class[classId])

    console.log("classe: ", classe);
    console.log("race: ", race);

    let BonusStats = [0, 0, 0, 0, 0, 0]

    BonusStats[0] = classe.abilityScore.Strength + race.abilityScore.Strength
    BonusStats[1] = classe.abilityScore.Dexterity + race.abilityScore.Dexterity
    BonusStats[2] = classe.abilityScore.Constitution + race.abilityScore.Constitution
    BonusStats[3] = classe.abilityScore.Intelligence + race.abilityScore.Intelligence
    BonusStats[4] = classe.abilityScore.Wisdom + race.abilityScore.Wisdom
    BonusStats[5] = classe.abilityScore.Charisma + race.abilityScore.Charisma

    console.log("BonusStats: ", BonusStats);
    
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
                <View style={styles.inputBuy}>
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
                    <Text style={{fontSize: 50, fontFamily: "dungeon", textAlign: "center", color: "white", marginTop: "8%", marginLeft: "5%"}}>
                        +   {BonusStats[id]}   =   {(Number(BonusStats[id]) + Number(number[id]))}
                    </Text>
                </View>
            </View>
          );
    }

    function NumberDropDown({setNumber, setRefresh, text, number, id, array, setArray, refresh}) {
        return (
            <View style={{flexDirection: "row"}}>
                <View style={styles.input}>
                    <ModalDropdown
                        style={{backgroundColor: "white", textAlign: "center"}}
                        textStyle={{textAlign: "center", fontSize: 40, fontFamily: "dungeon"}}
                        dropdownStyle={{width: "40%"}}
                        options={array}
                        defaultValue={"---"}
                        onSelect={(index, value) => {
                            let tmpArray = array
                            if (number[id] !== "---") {
                                tmpArray.push(number[id])
                            }
                            let tmpNumber = number
                            tmpNumber[id] = value
                            setNumber(tmpNumber)
                            if (value != "---")
                                tmpArray.splice(index, 1)
                            setArray(tmpArray)
                            setRefresh(!refresh)
                        }}
                    />
                    <Text style={{fontSize: 40, fontFamily: "dungeon", textAlign: "center", color: "white"}}>
                        {text}
                    </Text>
                </View>
                <View>
                    <Text style={{fontSize: 50, fontFamily: "dungeon", textAlign: "center", color: "white", marginTop: "8%", marginLeft: "5%"}}>
                        +   {BonusStats[id]}   =   {(Number(BonusStats[id]) + Number(number[id]))}
                    </Text>
                </View>
            </View>
          );
    }

    function rollStat(id, rolled, setRolled, setNumber, number) {
        let tmpRoll = rolled
        tmpRoll[id] = true
        setRolled(tmpRoll)
        let nbr = 0
        for (let j = 0; j < 4; j+= 1) {
            nbr += Math.floor(Math.random() * 6) + 1
        }
        let tmpNumber = number
        tmpNumber[id] = nbr.toString()
        setNumber(tmpNumber)
    }

    function NumberManual({setNumber, setRolled, rolled, text, number, id, setRefresh, refresh}) {
        return (
            <View style={{marginTop: 20, flexDirection: "row"}}>
                <View  style={styles.inputBuy}>
                    <TextInput
                        onChangeText={newText => {
                            let tmpNumber = [...number]
                            tmpNumber[id] = newText
                            setNumber(tmpNumber)
                        }}
                        onSubmitEditing={(event) => {
                            let tmpNumber = [...number]
                            if (Number(tmpNumber[id]) > 18)
                                tmpNumber[id] = "18"
                            if (Number(tmpNumber[id]) < 3)
                                tmpNumber[id] = "3"
                            setNumber(tmpNumber)
                        }}
                        value={number[id]}
                        keyboardType="numeric"
                    />
                    <View style={{ flexDirection: "row"}}>
                        <Text style={{fontSize: 40, fontFamily: "dungeon", textAlign: "center", color: "white"}}>
                            {text}
                        </Text>
                        <View style={{marginLeft: 20, height: 40, marginTop: 5}} >
                        <Button
                            disabled={rolled[id]}
                            onPress={() => {
                                rollStat(id, rolled, setRolled, setNumber, number)
                                setRefresh(!refresh)
                            }}
                            title="Roll"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                        </View>
                     </View>
                </View>
                <View>
                    <Text style={{fontSize: 50, fontFamily: "dungeon", textAlign: "center", color: "white", marginTop: "8%", marginLeft: "5%"}}>
                        +   {BonusStats[id]}   =   {(Number(BonusStats[id]) + Number(number[id]))}
                    </Text>
                </View>
            </View>
          );
    }

    

    function PointBuy({text, id}) {
        const [number, setNumber] = useState(["8", "8", "8", "8", "8", "8"]);
        const [remaining, setRemaining] = useState(27);
        
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

    function StandardArray({text, id}) {
        const [number, setNumber] = useState(["---", "---", "---", "---", "---", "---"]);
        const [refresh, setRefresh] = useState(false);
        const [array, setArray] = useState(["---", "15", "14", "13", "12", "10", "8", "---"]);

        return (
            <View style={{
                flex: 100,
                backgroundColor: "#032033",
            }}>
                <NumberDropDown setNumber={setNumber} setRefresh={setRefresh} refresh={refresh} text={"Strength"} number={number} id={0} array={array} setArray={setArray}/>
                <NumberDropDown setNumber={setNumber} setRefresh={setRefresh} refresh={refresh} text={"Dexterity"} number={number} id={1} array={array} setArray={setArray}/>
                <NumberDropDown setNumber={setNumber} setRefresh={setRefresh} refresh={refresh} text={"Constitution"} number={number} id={2} array={array} setArray={setArray}/>
                <NumberDropDown setNumber={setNumber} setRefresh={setRefresh} refresh={refresh} text={"Intelligence"} number={number} id={3} array={array} setArray={setArray}/>
                <NumberDropDown setNumber={setNumber} setRefresh={setRefresh} refresh={refresh} text={"Wisdom"} number={number} id={4} array={array} setArray={setArray}/>
                <NumberDropDown setNumber={setNumber} setRefresh={setRefresh} refresh={refresh} text={"Charisma"} number={number} id={5} array={array} setArray={setArray}/>
            </View>
          );
    }

    function ManualRolled({text, id}) {
        const [number, setNumber] = useState(["8", "8", "8", "8", "8", "8"]);
        const [rolled, setRolled] = useState([false, false, false, false, false, false]);
        const [refresh, setRefresh] = useState(false);

        return (
            <View style={{
                flex: 100,
                backgroundColor: "#032033",
                marginTop: -30
            }}>
                <NumberManual setNumber={setNumber} setRefresh={setRefresh} refresh={refresh} text={"Strength"} number={number} rolled={rolled} setRolled={setRolled} id={0}/>
                <NumberManual setNumber={setNumber} setRefresh={setRefresh} refresh={refresh} text={"Dexterity"} number={number} rolled={rolled} setRolled={setRolled} id={1}/>
                <NumberManual setNumber={setNumber} setRefresh={setRefresh} refresh={refresh} text={"Constitution"} number={number} rolled={rolled} setRolled={setRolled} id={2}/>
                <NumberManual setNumber={setNumber} setRefresh={setRefresh} refresh={refresh} text={"Intelligence"} number={number} rolled={rolled} setRolled={setRolled} id={3}/>
                <NumberManual setNumber={setNumber} setRefresh={setRefresh} refresh={refresh} text={"Wisdom"} number={number} rolled={rolled} setRolled={setRolled} id={4}/>
                <NumberManual setNumber={setNumber} setRefresh={setRefresh} refresh={refresh} text={"Charisma"} number={number} rolled={rolled} setRolled={setRolled} id={5}/>
            </View>
          );
    }

    function SubStatsComponnent({id}) {
        switch(id){
            case 0:
                return <PointBuy />
            case 1:
                return <StandardArray />
            case 2:
                return <ManualRolled/>
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
      marginTop: "5%",
      marginBottom: "10%"
    },
    inputBuy: {
        height: 40,
        backgroundColor: "white",
        width: "35%",
        marginLeft: "5%",
        marginTop: "5%",
        marginBottom: "10%"
      },
  });

export default Stats;
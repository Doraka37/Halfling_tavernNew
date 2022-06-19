import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export function BoxStats({stats, extended}) {
    const [extend, setExtend] = useState(extended);

    function TextComp({title, desc}) {
        return (
            <View style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "row",
                marginTop: -15,
                marginLeft: "50%"
            }}>
                <Text style={{fontSize: 40, textAlign: "center", fontFamily: "dungeon", textAlign: "center", color: "grey"}}>
                    {title}
                </Text>
                <Text style={{fontSize: 30, textAlign: "center", fontFamily: "dungeon", textAlign: "center", marginTop: 5, padding: 10, color: "white"}}>
                    {desc}
                </Text>
            </View>
        );
    }

    return (
        <View style={{width: "100%", alignItems: "center", justifyContent: "center", marginTop: 10, marginBottom: 10, paddingLeft: 10, paddingRight: 10}}>
            <TouchableOpacity style={{
                    width: "100%",
                    backgroundColor: "grey",
                    alignItems: "center", justifyContent: "center",
                }}
                onPress={() => {
                    setExtend(!extend)
                }}>
                <View>
                    <Text style={{fontSize: 40, textAlign: "center", fontFamily: "dungeon", marginTop: 20}}>
                        Statistiques:
                    </Text>
                </View>
            </TouchableOpacity>
            {extend == true && <View style={{
                width: "100%",
                backgroundColor: "#090F2E",
                alignItems: "center", justifyContent: "center",
            }}>
                <TextComp title={"Charisma:"} desc={stats.Charisma}/>
                <TextComp title={"Constitution:"} desc={stats.Constitution}/>
                <TextComp title={"Dexterity:"} desc={stats.Dexterity}/>
                <TextComp title={"Intelligence:"} desc={stats.Intelligence}/>
                <TextComp title={"Strength:"} desc={stats.Strength}/>
                <TextComp title={"Wisdom:"} desc={stats.Wisdom}/>
            </View>}
        </View>
    );
}

export default BoxStats;
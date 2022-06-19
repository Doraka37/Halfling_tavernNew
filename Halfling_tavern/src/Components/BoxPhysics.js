import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export function BoxPhysics({physics, extended}) {
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
                        Physics:
                    </Text>
                </View>
            </TouchableOpacity>
            {extend == true && <View style={{
                width: "100%",
                backgroundColor: "#090F2E",
                alignItems: "center", justifyContent: "center",
            }}>
                <TextComp title={"Hair:"} desc={physics.Hair}/>
                <TextComp title={"Skin:"} desc={physics.Skin}/>
                <TextComp title={"Eyes:"} desc={physics.Eyes}/>
                <TextComp title={"Height:"} desc={physics.Height}/>
                <TextComp title={"Weight:"} desc={physics.Weight}/>
                <TextComp title={"Age:"} desc={physics.Age}/>
                <TextComp title={"Gender:"} desc={physics.Gender}/>
            </View>}
        </View>
    );
}

export default BoxPhysics;
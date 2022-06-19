import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export function BoxTraits({personality, extended, lifestyle, alignement}) {
    const [extend, setExtend] = useState(extended);

    function TextComp({title, desc}) {
        return (
            <View style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "flex-start",
                marginTop: -15
            }}>
                <Text style={{fontSize: 40, textAlign: "center", fontFamily: "dungeon", textAlign: "center", color: "grey"}}>
                    {title}
                </Text>
                <Text adjustsFontSizeToFit={true}
                    allowFontScaling={true}
                    numberOfLines={5}
                    style={{fontSize: 30, textAlign: "center", fontFamily: "dungeon", textAlign: "center", marginTop: 5, padding: 10, color: "white"}}>
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
                        Traits:
                    </Text>
                </View>
            </TouchableOpacity>
            {extend == true && <View style={{
                width: "100%",
                backgroundColor: "#090F2E",
                alignItems: "center", justifyContent: "center",
            }}>
                <TextComp title={"Personality:"} desc={personality.Personality}/>
                <TextComp title={"Bond:"} desc={personality.Bond}/>
                <TextComp title={"Flaw:"} desc={personality.Flaw}/>
                <TextComp title={"Ideal:"} desc={personality.Ideal}/>
                <TextComp title={"Specialty:"} desc={personality.Specialty}/>
                <TextComp title={"Lifestyle:"} desc={lifestyle}/>
                <TextComp title={"Alignment:"} desc={alignement}/>
            </View>}
        </View>
    );
}

export default BoxTraits;
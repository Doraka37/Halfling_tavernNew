import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export function Box({title, desc, extended}) {
    const [extend, setExtend] = useState(extended);

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
            </View>}
        </View>
    );
}

export default Box;
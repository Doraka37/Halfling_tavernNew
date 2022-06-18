import React from 'react';
import {
    Text,
    View,
    Image,
  } from 'react-native';
  import {TextComp} from '../../Pages/Class'

function ClassTop({race, clas, image, description, stats, races}) {
    return (
        <View style={{
            backgroundColor: "#032033",
            alignItems: "center", justifyContent: "center",
        }}>
            <Image
                style={{width: '100%', resizeMode: "stretch"}}
                source={image}
            />
            <Text style={{fontSize: 60, textAlign: "center", fontFamily: "dungeon", marginTop: 20, color: "white"}}>
                {clas}
            </Text>
            <View style={{
                width: "100%",
                alignItems: "center", justifyContent: "center", marginBottom: 20
            }}>
                <Text style={{fontSize: 30, textAlign: "center", fontFamily: "dungeon", marginTop: 20, textAlign: "center", color: "white"}}>
                    {description}
                </Text>
            </View>
            <TextComp title={"Hit dice:"} desc={stats.HitDice}/>
            <TextComp title={"Primary Ability:"} desc={stats.Primary}/>
            <TextComp title={"Saves:"} desc={stats.Saves}/>
            { (races.find(element => element == race) != undefined)
                ? <Text style={{fontSize: 30, textAlign: "center", fontFamily: "dungeon", marginTop: 10, marginBottom: 10, color: "white"}}>
                    This class works well with the the race you have chosen
                </Text>
                : null
            }
        </View>
    );
}

export default ClassTop;
import React ,{ useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList
  } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export function ChoiceBox({title, desc, choices, nb}) {
    const [refresh, setRefresh] = useState(false);

    function Check({item}) {
    
        return (
            <View style={{flexDirection: "row", marginTop: 10, alignItems: "flex-start"}}>
                <CheckBox
                    value={item.checked}
                    onValueChange={(newValue) => {
                        setRefresh(!refresh)
                        item.checked = newValue
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
            <View style={{
                width: "80%",
                backgroundColor: "grey",
                alignItems: "center", justifyContent: "center",
            }}>
                <Text style={styles.Title}>
                    {title}
                </Text>
            </View>
            <View style={{
                width: "80%",
                backgroundColor: "#090F2E",
                alignItems: "center", justifyContent: "center",
            }}>
                <Text style={styles.Desc}>
                    {desc}
                </Text>
                <FlatList
                    data={choices}
                    renderItem={Check}
                    keyExtractor={item => item.label}
                />
            </View>
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

//const mapStateToProps = (state) => state;
//export default connect(mapStateToProps)(ButtonIcon);
export default ChoiceBox;
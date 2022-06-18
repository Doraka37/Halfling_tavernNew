import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    FlatList
} from 'react-native';
import { TextComp } from '../Pages/Class';

export function BoxList({title, desc}) {
    const [extend, setExtend] = useState(true);

    function renderItem({item}) {
        return (
            <View style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "flex-start",
                marginTop: 5,
            }}>
                <Text style={{fontSize: 40, textAlign: "center", fontFamily: "dungeon", textAlign: "center", color: "#696969"}}>
                    {item.title} : 
                </Text>
                <Text style={{fontSize: 30, textAlign: "center", fontFamily: "dungeon", textAlign: "center", marginTop: 5, marginLeft: 2, color: "white"}}>
                    {item.desc}
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
                        <Text style={{fontSize: 40, textAlign: "center", fontFamily: "dungeon", marginTop: 20, textAlign: "center"}}>
                            {title}
                        </Text>
                </View>
            </TouchableOpacity>
            {extend == true && <View style={{
                width: "100%",
                backgroundColor: "#090F2E",
                alignItems: "center", justifyContent: "center"
            }}>
                <FlatList
                    data={desc}
                    renderItem={renderItem}
                    keyExtractor={item => item.title}
                />
            </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 0,
        flexGrow: 1,
        flex: 1,
    }
  });

//const mapStateToProps = (state) => state;
//export default connect(mapStateToProps)(ButtonIcon);
export default BoxList;
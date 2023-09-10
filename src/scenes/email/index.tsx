import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NumberDescription = (props) =>{
    const {title} = props
    const titleArray =  title?.split('')
    if(titleArray?.length > 12){
        titleArray[0] + 'T' + titleArray[1] + 'B' + titleArray[4] + 'M' + titleArray[7] + 'K' +titleArray[10]
    }else if(titleArray < 12){
        
    }

    return(
        <View>
            <Text>
                {title}
            </Text>
        </View>
    )
}

const EmailScreen = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.wrapBoxSubContainer}>
                <Text>
                    123
                </Text>
                {/* {NumberDescription({title: 304220})} */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
    wrapBoxContainer:{
        width: '50%',
        backgroundColor: 'yellow',
        position: 'absolute',
        top: 0,
        right: 0
    },
    wrapBoxSubContainer:{
        height: 130,
        width: '70%',
        position: 'absolute',
        top: 100
    }
})

export default EmailScreen;

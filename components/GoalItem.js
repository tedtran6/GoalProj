import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

//functional component 
const GoalItem = props => {
    return <View style = {styles.listItem}><Text>{props.title}</Text></View>
};

const styles = StyleSheet.create({
    listItem:{
        paddingBottom: 30,
        padding: 10,
        marginVertical:20,
        backgroundColor: 'grey',
        borderColor: 'black',
        borderWidth: 1
      }
})

export default GoalItem;
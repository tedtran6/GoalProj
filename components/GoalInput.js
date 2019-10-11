import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

      // arrow function instead of that syntax above
    const goalInputHandler = (enteredText) =>{
        setEnteredGoal(enteredText);
    }

    return (
        <View style = {styles.inputContainer}>
        <TextInput 
          placeholder="Task" 
          style= {styles.input}
          onChangeText={goalInputHandler}
          value = {enteredGoal}
          />

                                        {/** send to prop to execute */}
        <Button title="ADD" onPress = {() => props.onAddGoal(enteredGoal)}/>
      </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
      },
      input: {
        width: '80%', borderColor: 'black', borderWidth: 3
      },
})

export default GoalInput;
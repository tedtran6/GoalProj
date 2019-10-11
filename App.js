import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import { grey, black } from 'ansi-colors';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
        //whats in the state, how you can update it

  // function goalInputHandler(enteredText){
  //   setEnteredGoal(enteredText);
  // }

  const addGoalHandler = goalTitle => {
    //console.log(enteredGoal)
    // function form
    //sets current goals to new updated goals
    //THEN assigns courseGoals to new updated list of currentGoals
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {key: Math.random().toString(), value: goalTitle}]) //need to do key value pairint
                //current goals =    //spread operator + new element
  }

  return (
    //view is like a div. 
    //self closing tags
    //onChangeText executes a function for every keystroke
    <View style = {styles.screen}>
      {/** create new prop onAddGoal that points at addGoalHandler function */}
      <GoalInput onAddGoal={addGoalHandler}/> 

      {/** data: input data
      renderItem: function for each item in data */}
      <FlatList data={courseGoals} renderItem={itemData => <GoalItem title= {itemData.item.value} />}/>
      {/**maps every item in courseGoals array to a Text */} 
      {/**
      <ScrollView>
        {courseGoals.map((goal) => <View key={goal} style = {styles.listItem}><Text>{goal}</Text></View>)}
      </ScrollView> 
      */} 

      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

//javascript object with all style configuration
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
 
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) {
      return;
    }

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText
    ]);
    
    setEnteredGoalText('');
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Your Course Goal" 
          style={styles.textInput} 
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
        </View>
      </View>

      <View style={styles.goalsContainer}>
        <Text style={styles.subtitle}>Current Goals</Text>
        {courseGoals.map((goal, index) => (
          <View key={index} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#f4f4f4',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d1d1',
    paddingBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#b2b2b2',
    backgroundColor: 'white',
    borderRadius: 8,
    width: '70%',
    padding: 12,
    fontSize: 16,
  },
  buttonContainer: {
    width: '25%',
  },
  goalsContainer: {
    flex: 5,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  goalItem: {
    marginVertical: 6,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#5e0acc',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  goalText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  }
});
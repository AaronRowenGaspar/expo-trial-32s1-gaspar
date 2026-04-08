import { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      {/* Replaced Button with Pressable */}
      <Pressable 
        onPress={addGoalHandler}
        style={({ pressed }) => [
          styles.buttonBase,
          pressed ? styles.buttonPressed : styles.buttonDefault
        ]}
      >
        <Text style={styles.buttonText}>Add Goal</Text>
      </Pressable>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  buttonBase: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonDefault: {
    backgroundColor: '#5e0acc',
  },
  buttonPressed: {
    backgroundColor: '#3d0685',
    opacity: 0.8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});
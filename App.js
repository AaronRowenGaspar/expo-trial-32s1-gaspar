import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Button, Alert, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  // 1. Welcome Pop-up logic
  function welcomeUserHandler() {
    Alert.alert(
      "Welcome!",
      "Hello Aaron Rowen! Welcome to your Goal Tracker application.",
      [{ text: "Let's Go!", style: "default" }]
    );
  }

  // 2. Monitoring goal count for "Overwhelming Burden" Warning
  useEffect(() => {
    if (courseGoals.length > 5) {
      Alert.alert(
        "Warning!",
        "You have more than 5 goals. Be careful not to overwhelm yourself with too much burden!",
        [{ text: "I understand", style: "cancel" }]
      );
    }
  }, [courseGoals.length]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim().length === 0) return;
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  // 3. Deletion Logic with Confirmation
  function deleteGoalHandler(id) {
    Alert.alert(
      "Delete Goal",
      "Are you sure you want to delete this goal?",
      [
        { text: "No", style: "cancel" },
        { 
          text: "Yes, Delete", 
          style: "destructive", 
          onPress: () => {
            setCourseGoals((currentGoals) => {
              return currentGoals.filter((goal) => goal.id !== id);
            });
          } 
        }
      ]
    );
  }

  return (
    <View style={styles.appContainer}>
      {/* User Icon Bar */}
      <View style={styles.navBar}>
        <Pressable onPress={welcomeUserHandler} style={({pressed}) => pressed && styles.pressedIcon}>
          <Ionicons name="person-circle" size={45} color="#5e0acc" />
        </Pressable>
      </View>

      <View style={styles.mainButtonContainer}>
        <Button 
          title="Add New Goal" 
          color="#5e0acc" 
          onPress={startAddGoalHandler} 
        />
      </View>
      
      {/* This component is only visible when modalIsVisible is true */}
      <GoalInput 
        visible={modalIsVisible} 
        onAddGoal={addGoalHandler} 
        onCancel={endAddGoalHandler} 
      />
      
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem 
                text={itemData.item.text} 
                id={itemData.item.id} 
                onDeleteItem={deleteGoalHandler} 
              />
            );
          }}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  mainButtonContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 20,
    marginBottom: 20,
  },
  goalsContainer: {
    flex: 5,
  },
  pressedIcon: {
    opacity: 0.7,
  }
});
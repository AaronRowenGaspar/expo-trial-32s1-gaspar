import { View, FlatList, ScrollView, StyleSheet } from 'react-native';
import GoalItem from './GoalItem';

function GoalList({ items, useFlatList }) {
  return (
    <View style={styles.goalsContainer}>
      {useFlatList ? (
        <FlatList
          data={items}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
      ) : (
        <ScrollView alwaysBounceVertical={false}>
          {items.map((goal) => (
            <GoalItem key={goal.id} text={goal.text} />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

export default GoalList;

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5, // FIX: Tells this container to grow and fill the bottom space
    marginTop: 20,
  },
});
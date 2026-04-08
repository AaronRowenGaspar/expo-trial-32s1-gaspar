import { View, Button, Text, StyleSheet } from 'react-native';

function ListToggle({ onToggle, isFlatList }) {
  return (
    <View style={styles.toggleContainer}>
      <Button 
        title={`Switch to ${isFlatList ? 'ScrollView' : 'FlatList'}`} 
        onPress={onToggle} 
        color="#5e0acc"
      />
      <Text style={styles.statusText}>
        Mode: <Text style={styles.boldText}>{isFlatList ? 'FlatList' : 'ScrollView'}</Text>
      </Text>
    </View>
  );
}

export default ListToggle;

const styles = StyleSheet.create({
  toggleContainer: { marginVertical: 10, alignItems: 'center' },
  statusText: { marginTop: 8, fontSize: 14 },
  boldText: { fontWeight: 'bold', color: '#5e0acc' }
});
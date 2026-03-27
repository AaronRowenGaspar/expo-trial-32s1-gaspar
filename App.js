import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textWithNoBorder}>Aaron Gaspar</Text>

      <Text style={styles.textWithHexBorder}>AARON GASPAR</Text>

      <View style={styles.buttonContainer}>
        <Button 
          title="Tap me!" 
          color="green" 
        />
      </View>

      <Text style={styles.textWithRedBorder}>aaron gaspar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWithNoBorder: {
    margin: 16,               
    padding: 16,              
  },
  textWithHexBorder: {
    margin: 16,               
    padding: 16,              
    borderWidth: 2,           
    borderColor: '#ff5733',   
  },
  textWithRedBorder: {
    margin: 16,               
    padding: 16,              
    borderWidth: 2,           
    borderColor: 'red',      
  },
  buttonContainer: {
    marginTop: 20,
  },
});
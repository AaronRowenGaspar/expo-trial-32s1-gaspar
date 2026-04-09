import React from 'react';
import Constants from 'expo-constants';
import { 
  Platform, 
  StatusBar, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export default class Status extends React.Component {
  state = {
    info: null, // Initial state is null to fetch actual status [cite: 117]
  };

  componentDidMount() {
    this.subscription = NetInfo.addEventListener(state => {
      this.handleChange(state);
    });

    NetInfo.fetch().then(state => {
      this.setState({ info: state.type });
    });
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription();
    }
  }

  handleChange = (state) => {
    this.setState({ info: state.type });
  };

  render() {
    const { info } = this.state;
    
    const isConnected = info !== 'none' && info !== 'unknown'; 
    const backgroundColor = isConnected ? 'white' : 'red'; 

    return (
      <View style={[styles.status, { backgroundColor }]}>
        <StatusBar
          backgroundColor={backgroundColor}
          barStyle={isConnected ? 'dark-content' : 'light-content'}
          animated={false}
        />
        {}
        {!isConnected && (
          <View style={styles.messageContainer} pointerEvents={'none'}>
            <View style={styles.bubble}>
              <Text style={styles.text}>No Network Connection!</Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const statusHeight = Platform.OS === 'ios' ? Constants.statusBarHeight : 0;

const styles = StyleSheet.create({
  status: {
    zIndex: 1, 
    height: statusHeight, 
  },
  messageContainer: {
    zIndex: 1,
    position: 'absolute', 
    top: statusHeight + 20, 
    right: 0, 
    left: 0, 
    height: 80,
    alignItems: 'center',
  },
  bubble: {
    paddingHorizontal: 20,
    paddingVertical: 10, 
    borderRadius: 20, 
    backgroundColor: 'red', 
  },
  text: {
    color: 'white',
  },
});
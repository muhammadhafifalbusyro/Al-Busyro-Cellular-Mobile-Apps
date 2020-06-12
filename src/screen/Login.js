import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

class Login extends React.Component {
  // componentDidMount() {
  //   setTimeout(() => {}, timeout);
  // }
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.splashScreen}>
          <Text style={styles.textSplashScreen}>ABC</Text>
          <ActivityIndicator size="large" color="white" />
        </View> */}
        <View style={styles.templateLogin} />
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashScreen: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'deepskyblue',
  },
  textSplashScreen: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'white',
  },
});

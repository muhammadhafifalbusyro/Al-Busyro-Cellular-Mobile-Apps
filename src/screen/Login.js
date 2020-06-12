import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class Login extends React.Component {
  state = {
    splash: true,
    username: '',
    password: '',
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({splash: false});
    }, 3000);
  }

  splashScreen() {
    if (this.state.splash) {
      return (
        <View style={styles.splashScreen}>
          <Text style={styles.textSplashScreen}>ABC</Text>
          <Text style={styles.textAppVersion}>Versi 1.0</Text>
          <ActivityIndicator size="large" color="white" />
        </View>
      );
    } else {
      return false;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.splashScreen()}
        <View style={styles.templateLogin}>
          <Text style={styles.counterName}> ABC </Text>
          <Text style={styles.counterName2}> AL BUSYRO CELLULAR </Text>
          <TextInput
            value={this.state.username}
            style={styles.inputUsername}
            placeholder="Nama Pengguna"
            onChangeText={text => this.setState({username: text})}
            returnKeyType="next"
            onSubmitEditing={() => {
              this.secondTextInput.focus();
            }}
          />
          <TextInput
            value={this.state.password}
            style={styles.inputPassword}
            placeholder="Kata Sandi"
            secureTextEntry={true}
            onChangeText={text => this.setState({password: text})}
            ref={input => {
              this.secondTextInput = input;
            }}
          />
          <TouchableOpacity style={styles.buttonLogin} activeOpacity={0.7}>
            <Text style={styles.textButtonLogin}>Masuk</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonRegister}
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.textButtonRegister}>Daftar Anggota</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Login;

const primaryColor = 'deepskyblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashScreen: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primaryColor,
  },
  textSplashScreen: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'white',
  },
  textAppVersion: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '5%',
  },
  templateLogin: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  counterName: {
    fontSize: 50,
    fontWeight: 'bold',
    color: primaryColor,
  },
  counterName2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: primaryColor,
    marginBottom: '10%',
  },
  inputUsername: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 3,
    padding: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.05)',
    marginBottom: '5%',
  },
  inputPassword: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 3,
    padding: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.05)',
    marginBottom: '5%',
  },
  buttonLogin: {
    height: 50,
    width: '80%',
    fontSize: 16,
    borderRadius: 3,
    padding: 10,
    backgroundColor: 'royalblue',
    marginBottom: '5%',
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButtonLogin: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonRegister: {
    height: 50,
    width: '80%',
    fontSize: 16,
    borderRadius: 3,
    padding: 10,
    backgroundColor: 'orange',
    marginBottom: '5%',
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButtonRegister: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

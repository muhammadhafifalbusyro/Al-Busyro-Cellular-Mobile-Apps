import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class Register extends React.Component {
  state = {
    username: '',
    phoneNumber: '',
    password: '',
    passwordConfirm: '',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.templateRegister}>
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
            value={this.state.phoneNumber}
            style={styles.inputPhoneNumber}
            placeholder="Nomor Hp"
            onChangeText={text => this.setState({phoneNumber: text})}
            ref={input => {
              this.secondTextInput = input;
            }}
            keyboardType="number-pad"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.thirdTextInput.focus();
            }}
          />
          <TextInput
            value={this.state.password}
            style={styles.inputPassword}
            placeholder="Kata Sandi"
            onChangeText={text => this.setState({password: text})}
            ref={input => {
              this.thirdTextInput = input;
            }}
          />
          <TouchableOpacity style={styles.buttonRegister} activeOpacity={0.7}>
            <Text style={styles.textButtonLogin}>Daftar Anggota</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  templateRegister: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
  inputPhoneNumber: {
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

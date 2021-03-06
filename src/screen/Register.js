import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Modal,
  ActivityIndicator,
} from 'react-native';

class Register extends React.Component {
  state = {
    username: '',
    phoneNumber: '',
    password: '',
    passwordConfirm: '',
    modalVisible: true,
  };
  register() {
    let {username, phoneNumber, password, passwordConfirm} = this.state;
    if (
      (username == '', phoneNumber == '', password == '', passwordConfirm == '')
    ) {
      ToastAndroid.show(
        'Data cannot be empty',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else {
      fetch('http://192.168.1.10:8888/albusyrocellularapi/api/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          no_hp: this.state.phoneNumber,
          password: this.state.password,
        }),
      })
        .then(response => response.json())
        .then(responseJson => {
          ToastAndroid.show(
            responseJson.message,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        })
        .catch(error =>
          ToastAndroid.show(
            'Registration failed',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          ),
        );
    }
  }
  konfirmasiKataSandi() {
    if (
      this.state.password === this.state.passwordConfirm &&
      this.state.password === ''
    ) {
      return (
        <TextInput
          value={this.state.passwordConfirm}
          style={styles.inputPasswordConfirm}
          secureTextEntry={true}
          placeholder="Konfirmasi Kata Sandi"
          onChangeText={text => this.setState({passwordConfirm: text})}
          ref={input => {
            this.fourthTextInput = input;
          }}
        />
      );
    } else if (
      this.state.password === this.state.passwordConfirm &&
      this.state.password != ''
    ) {
      return (
        <TextInput
          value={this.state.passwordConfirm}
          style={styles.inputPasswordConfirmTrue}
          secureTextEntry={true}
          onChangeText={text => this.setState({passwordConfirm: text})}
          ref={input => {
            this.fourthTextInput = input;
          }}
        />
      );
    } else if (
      this.state.password != this.state.passwordConfirm &&
      this.state.passwordConfirm === ''
    ) {
      return (
        <TextInput
          value={this.state.passwordConfirm}
          style={styles.inputPasswordConfirm}
          secureTextEntry={true}
          placeholder="Konfirmasi Kata Sandi"
          onChangeText={text => this.setState({passwordConfirm: text})}
          ref={input => {
            this.fourthTextInput = input;
          }}
        />
      );
    } else {
      return (
        <TextInput
          value={this.state.passwordConfirm}
          style={styles.inputPasswordConfirmWrong}
          secureTextEntry={true}
          placeholderTextColor="red"
          onChangeText={text => this.setState({passwordConfirm: text})}
          ref={input => {
            this.fourthTextInput = input;
          }}
        />
      );
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ActivityIndicator size="large" color="deepskyblue" />
              <Text style={styles.modalText}>Loading ...</Text>
            </View>
          </View>
        </Modal>
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
            secureTextEntry={true}
            placeholder="Kata Sandi"
            onChangeText={text => this.setState({password: text})}
            returnKeyType="next"
            ref={input => {
              this.thirdTextInput = input;
            }}
            onSubmitEditing={() => {
              this.fourthTextInput.focus();
            }}
          />
          {this.konfirmasiKataSandi()}
          <TouchableOpacity
            style={styles.buttonRegister}
            activeOpacity={0.7}
            onPress={() => this.register()}>
            <Text style={styles.textButtonLogin}>Daftar Anggota</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonLogin}
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.textButtonRegister}>Masuk</Text>
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
  inputPasswordConfirm: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 3,
    padding: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.05)',
    marginBottom: '5%',
  },
  inputPasswordConfirmWrong: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    borderColor: 'red',
    fontSize: 16,
    borderRadius: 3,
    padding: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.05)',
    marginBottom: '5%',
  },
  inputPasswordConfirmTrue: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    borderColor: 'lime',
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    height: 100,
    width: 100,
    borderRadius: 10,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    marginTop: 10,
    color: 'grey',
    textAlign: 'center',
  },
});

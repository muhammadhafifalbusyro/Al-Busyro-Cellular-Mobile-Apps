import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Profile extends React.Component {
  state = {
    username: '',
    phoneNumber: '',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxHeader}>
          <Text style={styles.textHeader}>Akun Saya</Text>
        </View>
        <View style={styles.background}>
          <View style={styles.photoTemplate}>
            <Image
              source={{
                uri: 'https://pbs.twimg.com/media/DMaxb3BUEAEgzi7.jpg',
              }}
              style={styles.photoStyle}
            />
            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.camera}>
                <Icon name="camera" size={25} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.idTemplate}>
          <Text style={styles.idStyle}>ID : ABC001</Text>
        </View>
        <View style={styles.blank} />
        <View style={styles.identBox}>
          <Icon name="user" size={30} color="deepskyblue" />
          <View style={styles.fieldIdent}>
            <Text>Username</Text>
          </View>
        </View>
        <View style={styles.identBox}>
          <Icon name="phone" size={30} color="deepskyblue" />
          <View style={styles.fieldIdent}>
            <Text>Phone Number</Text>
          </View>
        </View>
        <View style={styles.boxButton}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.changePasswordButton}>
            <Text style={styles.textColorButton}>Ubah Kata Sandi</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.changeIdButton}>
            <Text style={styles.textColorButton}>Ubah Data</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.logoutButton}>
            <Text style={styles.textColorButton}>Keluar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  boxHeader: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    elevation: 5,
    padding: '2%',
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  background: {
    height: '40%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'deepskyblue',
  },
  photoTemplate: {
    height: 120,
    width: 120,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoStyle: {
    height: 120,
    width: 120,
    borderRadius: 100,
    position: 'absolute',
  },
  camera: {
    height: 35,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    borderRadius: 10,
  },
  idTemplate: {
    height: '8%',
    width: '50%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2,
    position: 'absolute',
    top: '43%',
  },
  idStyle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  blank: {
    height: '8%',
    width: '100%',
  },
  identBox: {
    height: '10%',
    width: '100%',
    padding: '5%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  fieldIdent: {
    height: 40,
    width: '80%',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    fontSize: 16,
    borderRadius: 3,
    padding: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.05)',
    marginLeft: '2%',
  },
  boxButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '7%',
  },
  changePasswordButton: {
    height: 35,
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 2,
    elevation: 2,
    marginHorizontal: '2%',
  },
  changeIdButton: {
    height: 35,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
    borderRadius: 2,
    elevation: 2,
    marginHorizontal: '2%',
  },
  logoutButton: {
    height: 35,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 2,
    elevation: 2,
    marginHorizontal: '2%',
  },
  textColorButton: {
    color: 'white',
  },
});

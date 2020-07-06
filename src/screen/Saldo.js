import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// class saldo
class Saldo extends React.Component {
  state = {
    username: '',
    phoneNumber: '',
    boxIcon: [
      {
        iconName: 'arrow-alt-circle-up',
        size: 35,
        color: 'deepskyblue',
        title: 'TOP UP',
      },
      {
        iconName: 'arrow-alt-circle-right',
        size: 35,
        color: 'deepskyblue',
        title: 'TRANSFER',
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxHeader}>
          <Text style={styles.textHeader}>Dompet Saya</Text>
        </View>
        <View style={styles.background}>
          <Text style={{fontSize: 15, color: 'white'}}>Uang Saya</Text>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
              fontWeight: 'bold',
              marginBottom: '5%',
            }}>
            RP 1.000.000,00
          </Text>
          <Text style={{fontSize: 15, color: 'white'}}>Poin Saya</Text>
          <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
            1000
          </Text>
        </View>
        <View style={styles.firstField}>
          <Text style={styles.titleIsiUlang}>Aksi</Text>
          <View style={styles.fieldBoxIcon}>
            {this.state.boxIcon.map((value, key) => {
              return (
                <TouchableOpacity activeOpacity={0.5} key={key}>
                  <View style={styles.boxIcon}>
                    <Icon
                      name={value.iconName}
                      size={value.size}
                      color={value.color}
                    />
                    <Text style={styles.titleIcon}>{value.title} </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}
export default Saldo;

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
  firstField: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: '3%',
    padding: '3%',
  },
  titleIsiUlang: {
    fontWeight: 'bold',
    marginBottom: '2%',
  },
  fieldBoxIcon: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  boxIcon: {
    height: 75,
    width: 75,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1%',
  },
  titleIcon: {
    fontSize: 11,
    marginTop: '5%',
  },
});

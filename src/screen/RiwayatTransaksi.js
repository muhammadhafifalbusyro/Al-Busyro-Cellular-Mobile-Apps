import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class RiwayatTransaksi extends React.Component {
  state = {
    data: [
      {
        timeStamp: ['09/09/2020', '20:30'],
        keterangan: 'pulsa xl 10000',
        status: 'sukses',
      },
      {
        timeStamp: ['09/09/2020', '20:30'],
        keterangan: 'pulsa xl 10000',
        status: 'gagal',
      },
      {
        timeStamp: ['09/09/2020', '20:30'],
        keterangan: 'pulsa xl 10000',
        status: 'dalam proses',
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxHeader}>
          <Text style={styles.textHeader}>Riwayat Transaksi</Text>
        </View>
        <ScrollView style={{width: '100%'}}>
          {this.state.data.map((value, key) => {
            let colorStatus = '';
            if (value.status === 'sukses') {
              colorStatus = 'green';
            } else if (value.status === 'dalam proses') {
              colorStatus = 'orange';
            } else if (value.status === 'gagal') {
              colorStatus = 'red';
            }
            return (
              <View style={styles.fieldHistoryTransaction} key={key}>
                <Text>
                  Time Stamp : {value.timeStamp[0]} || {value.timeStamp[1]}
                </Text>
                <Text>Keterangan : {value.keterangan}</Text>
                <Text>
                  Status :{' '}
                  <Text style={{fontWeight: 'bold', color: colorStatus}}>
                    {value.status}
                  </Text>
                </Text>
              </View>
            );
          })}
        </ScrollView>
        <TouchableOpacity activeOpacity={0.7} style={styles.deleteButton}>
          <Icon name="trash" size={25} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}
export default RiwayatTransaksi;

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
  fieldHistoryTransaction: {
    height: 70,
    width: '100%',
    backgroundColor: 'white',
    padding: '2%',
    marginBottom: '2%',
  },
  deleteButton: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'deepskyblue',
    position: 'absolute',
    zIndex: 1,
    bottom: '5%',
    right: '10%',
    elevation: 2,
  },
});

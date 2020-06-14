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
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxHeader}>
          <Text style={styles.textHeader}>Riwayat Transaksi</Text>
        </View>
        <ScrollView style={{width: '100%'}}>
          <View
            style={{
              height: 70,
              width: '100%',
              backgroundColor: 'white',
              padding: '2%',
              marginBottom: '2%',
            }}>
            <Text>Waktu : 09/09/2020 || 20:30</Text>
            <Text>Keterangan : pulsa xl 10000</Text>
            <Text>Status : Sukses</Text>
          </View>
          <View
            style={{
              height: 70,
              width: '100%',
              backgroundColor: 'white',
              padding: '2%',
              marginBottom: '2%',
            }}>
            <Text>Waktu : 09/09/2020 || 20:30</Text>
            <Text>Keterangan : pulsa xl 10000</Text>
            <Text>Status : Sukses</Text>
          </View>
          <View
            style={{
              height: 70,
              width: '100%',
              backgroundColor: 'white',
              padding: '2%',
              marginBottom: '2%',
            }}>
            <Text>Waktu : 09/09/2020 || 20:30</Text>
            <Text>Keterangan : pulsa xl 10000</Text>
            <Text>Status : Sukses</Text>
          </View>
          <View
            style={{
              height: 70,
              width: '100%',
              backgroundColor: 'white',
              padding: '2%',
              marginBottom: '2%',
            }}>
            <Text>Waktu : 09/09/2020 || 20:30</Text>
            <Text>Keterangan : pulsa xl 10000</Text>
            <Text>Status : Sukses</Text>
          </View>
          <View
            style={{
              height: 70,
              width: '100%',
              backgroundColor: 'white',
              padding: '2%',
              marginBottom: '2%',
            }}>
            <Text>Waktu : 09/09/2020 || 20:30</Text>
            <Text>Keterangan : pulsa xl 10000</Text>
            <Text>Status : Sukses</Text>
          </View>
          <View
            style={{
              height: 70,
              width: '100%',
              backgroundColor: 'white',
              padding: '2%',
              marginBottom: '2%',
            }}>
            <Text>Waktu : 09/09/2020 || 20:30</Text>
            <Text>Keterangan : pulsa xl 10000</Text>
            <Text>Status : Sukses</Text>
          </View>
          <View
            style={{
              height: 70,
              width: '100%',
              backgroundColor: 'white',
              padding: '2%',
              marginBottom: '2%',
            }}>
            <Text>Waktu : 09/09/2020 || 20:30</Text>
            <Text>Keterangan : pulsa xl 10000</Text>
            <Text>Status : Sukses</Text>
          </View>
          <View
            style={{
              height: 70,
              width: '100%',
              backgroundColor: 'white',
              padding: '2%',
              marginBottom: '2%',
            }}>
            <Text>Waktu : 09/09/2020 || 20:30</Text>
            <Text>Keterangan : pulsa xl 10000</Text>
            <Text>Status : Sukses</Text>
          </View>
          <View
            style={{
              height: 70,
              width: '100%',
              backgroundColor: 'white',
              padding: '2%',
              marginBottom: '2%',
            }}>
            <Text>Waktu : 09/09/2020 || 20:30</Text>
            <Text>Keterangan : pulsa xl 10000</Text>
            <Text>Status : Sukses</Text>
          </View>
          <View
            style={{
              height: 70,
              width: '100%',
              backgroundColor: 'white',
              padding: '2%',
              marginBottom: '2%',
            }}>
            <Text>Waktu : 09/09/2020 || 20:30</Text>
            <Text>Keterangan : pulsa xl 10000</Text>
            <Text>Status : Sukses</Text>
          </View>
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
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
          }}>
          <Icon name="trash" size={30} color="white" />
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
});

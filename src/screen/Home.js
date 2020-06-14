import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {BackgroundCarausel} from '../component/BackgroundCarausel';
import Icon from 'react-native-vector-icons/FontAwesome';

const images = [
  'https://pbs.twimg.com/media/DMaxb3BUEAEgzi7.jpg',
  'https://paketaninternet.com/wp-content/uploads/2015/06/Promo-XL-Elevenia-Monday-Madness.jpg',
  'https://refrez.com/wp-content/uploads/2019/01/pulsa-tri.png',
];

class Home extends React.Component {
  state = {
    boxIcon: [
      {
        iconName: 'phone',
        size: 35,
        color: 'deepskyblue',
        title: 'PULSA',
      },
      {
        iconName: 'wifi',
        size: 35,
        color: 'deepskyblue',
        title: 'PAKET DATA',
      },
      {
        iconName: 'bolt',
        size: 35,
        color: 'deepskyblue',
        title: 'T. LISTRIK',
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <BackgroundCarausel images={images} />
        <View style={styles.firstField}>
          <Text style={styles.titleIsiUlang}>Isi Ulang</Text>
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
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

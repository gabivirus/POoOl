import { View, StyleSheet, ScrollView, Image } from 'react-native';

export default function Forest() {
  return (
    <View style={estilo.view}>
      <ScrollView>
        <Image style={estilo.image} source={require('../../assets/night2.png')} />
        <Image style={estilo.image} source={require('../../assets/night1.png')} />
        <Image style={estilo.image} source={require('../../assets/night3.png')} />
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  view: {
    padding: '1rem'
  },
  image: {
    width: '100%',
    resizeMode: 'center',
  }
})
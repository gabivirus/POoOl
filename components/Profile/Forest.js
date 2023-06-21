import { View, StyleSheet, ScrollView, Image } from 'react-native';

export default function Forest() {
  return (
    <View style={estilo.view}>
      <ScrollView>
        <Image style={estilo.image} imageStyle={estilo.img} source={require('../../assets/pbg.png')} />
        <Image style={estilo.image} source={require('../../assets/trees1.png')} />
        <Image style={estilo.image} source={require('../../assets/trees2.png')} />
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  view: {
    padding: '1rem',
  },
  image: {
    width: '100%',
    resizeMode: 'center',
  },
})
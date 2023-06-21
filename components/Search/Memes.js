import { View, StyleSheet, ScrollView, Image } from 'react-native';

export default function Memes() {
  return (
    <View style={estilo.view}>
      <ScrollView>
        <Image style={estilo.image} resizeMode={'contain'} source={require('../../assets/meme1.png')} />
        <Image style={estilo.image} resizeMode={'contain'} source={require('../../assets/meme2.png')} />
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

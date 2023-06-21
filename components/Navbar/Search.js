import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity, ImageBackground, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Search(props) {
  return (
    <View>
      <View style={estilo.body}>
        <Text style={estilo.title}>O que deseja encontrar?</Text>
        <View style={estilo.searchBox}>
          <AntDesign
            style={estilo.searchIcon}
            name="search1"
            size={24}
            color="white"
          />
          <TextInput style={estilo.searchInput} placeholder="Procurar por..." />
        </View>
        <Text style={estilo.trends}>
          <Text style={estilo.trend}>Tendências:</Text> pôr do sol, espaço,
          panorama...
        </Text>
        <View style={estilo.imgContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Anime')}
            style={estilo.card}>
            <ImageBackground
              source={require('../../assets/anime1.png')}
              imageStyle={estilo.cardBackImage}
              style={estilo.cardImage}>
              <Text style={estilo.cardTitle}>Anime</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Draw')}
            style={estilo.card}>
            <ImageBackground
              source={require('../../assets/draw1.png')}
              imageStyle={estilo.cardBackImage}
              style={estilo.cardImage}>
              <Text style={estilo.cardTitle}>Drawing</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Memes')}
            style={estilo.card}>
            <ImageBackground
              source={require('../../assets/meme1.png')}
              imageStyle={estilo.cardBackImage}
              style={estilo.cardImage}>
              <Text style={estilo.cardTitle}>Memes</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  body: {
    padding: '1rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 600,
  },
  searchBox: {
    flexDirection: 'row',
    width: '100%',
    border: '2px #FFF solid',
    outline: '3px #000 solid',
    borderRadius: 30,
    color: '#FFF',
    backgroundColor: '#000',
    fontWeight: 600,
    marginVertical: '1rem',
    padding: 5,
  },
  searchIcon: {
    fontWeight: 800,
    marginRight: 5,
  },
  searchInput: {
    color: '#FFF',
    fontWeight: 600,
    fontSize: '1rem',
  },
  trend: {
    color: '#a0a0a0',
  },
  trends: {
    fontWeight: 500,
  },
  imgContainer: {
    display: 'flex',
    alignContent: 'center',
  },
  card: {
    borderRadius: 10,
    marginVertical: 10,
    display: 'flex',
    alignContent: 'center',
  },
  cardImage: {
    height: 160,
    width: '100%',
    display: 'flex',
    textAlign: 'center',
    alignContent: 'center',
    borderRadius: 10,
  },
  cardBackImage: {
    borderRadius: 10,
    filter: 'brightness(.75)',
  },
  cardTitle: {
    display: 'flex',
    color: '#FFF',
    fontWeight: 600,
    fontSize: '1.5rem',
    margin: 10,
    // marginTop: '1rem'
  },
});

import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, } from 'react-native';

export default function Search(props) {
  return (
    <View>
      <View style={estilo.headerBack}>
        <ImageBackground imageStyle={estilo.bgImage} style={estilo.header} source={require('../../assets/pbg.png')}>
          <Image style={estilo.profilePic} source={require('../../assets/anime1.png')} />
          <Text style={estilo.name}>Gabriel Ribeiro</Text>
          <View>
          <Text style={estilo.aboutTitles}>
            <Text>Seguidores</Text>
            <Text>Likes</Text>
            <Text>Seguindo</Text>
          </Text>
          <Text style={estilo.about}>
            <Text>12K</Text>
            <Text>2M</Text>
            <Text>256</Text>
          </Text>
          </View>
        </ImageBackground>
      </View>
      
        <View style={estilo.imgContainer}>
          <TouchableOpacity style={estilo.card} onPress={() => props.navigation.navigate('Forest')}>
            <ImageBackground imageStyle={estilo.cardBackImage} style={estilo.cardImage} source={require('../../assets/pbg.png')}>
              <Text  style={estilo.cardTitle}>Forest</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={estilo.card} onPress={() => props.navigation.navigate('Night')}>
            <ImageBackground imageStyle={estilo.cardBackImage} style={estilo.cardImage} source={require('../../assets/night1.png')}>
              <Text  style={estilo.cardTitle}>Night</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  headerBack: {
    marginBottom: 8,
  },
  bgImage: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    filter: 'brightness(.75)',
    height: '100%',
  },
  header: {
    resizeMode: 'contain',
    height: '100%',
    display: 'grid',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100vw'
  },
  profilePic: {
    width: '10rem',
    height: '10rem',
    margin: '2rem',
    padding: 0,
    marginVertical: 20,
    borderRadius: '50%',
  },
  name: {
    color: '#FFF',
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: 10
  },
  aboutTitles: {  
    display: 'flex',
    flexDirection: 'row',
    color: '#FFF',
    justifyContent: 'space-between',
  },
    about: {  
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1.3rem',
    fontWeight: 600,
    color: '#FFF',
    justifyContent: 'space-between',
    marginBottom: '2rem'
  },
  imgContainer: {
    display: 'flex',
    alignContent: 'center',
    padding: '1rem'
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
  },
});

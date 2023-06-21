import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, ImageBackground,} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Home() {
  return (
    <View>
      <ScrollView>
        <View style={estilo.headerBack}>
          <ImageBackground
            style={estilo.backImage}
            source={require('../../assets/bg.png')}>
            <View style={estilo.headerContent}>
              <Text style={estilo.title}>
                Encontre todas as fotos que precise! Crie conteúdo para seus
                seguidores
              </Text>

              <View style={estilo.searchBox}>
                <AntDesign
                  style={estilo.searchIcon}
                  name="search1"
                  size={24}
                  color="white"
                />
                <TextInput
                  style={estilo.searchInput}
                  placeholder="Procurar por..."
                />
              </View>

              <View style={estilo.hintContainer}>
                <TouchableOpacity style={estilo.hint}>
                  <Text style={estilo.hintText}>Jogador</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilo.hint}>
                  <Text style={estilo.hintText}>Aparelhos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilo.hint}>
                  <Text style={estilo.hintText}>Sol</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilo.hint}>
                  <Text style={estilo.hintText}>Lua</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilo.hint}>
                  <Text style={estilo.hintText}>Desenvolvedora</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilo.hint}>
                  <Text style={estilo.hintText}>Litorâneo</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={estilo.mainFlex}>
          <View style={estilo.col}>
            <Image style={estilo.mainImg} source={require('../../assets/main1.png')} />
            <Image style={estilo.mainImg} source={require('../../assets/main3.png')} />
          </View>

          <View style={estilo.col}>
            <Image style={estilo.mainImg} source={require('../../assets/main2.png')} />
            <Image style={estilo.mainImg} source={require('../../assets/main4.png')} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  headerBack: {
    marginBottom: 8,
  },
  
  backImage: { 
    resizeMode: 'contain',
    padding: '1.2rem',
    height: '100%',
  },

  headerContent: { 
    height: 'fit-content'
  },

  title: { 
    fontSize: '2rem',
    color: '#FFF',
    fontWeight: 600
  },

  searchBox: {
    flexDirection: 'row',
    width: '100%',
    border: '2px #FFF solid',
    borderRadius: 30,
    color: '#FFF',
    fontWeight: 600,
    marginVertical: '1rem',
    padding: 5,
  },

  searchIcon: {
    fontWeight: 800,
    marginRight: 5 
  },

  searchInput: {
    color: '#FFF',
    fontWeight: 600,
    fontSize: '1rem' 
  },
  
  hintContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap' 
  },

  hint: {
    color: '#FFF',
    border: '2px #FFF solid',
    borderRadius: 30,
    margin: 5,
    padding: 5,
  },

  hintText: {
    color: '#FFF',
    fontWeight: 600
  },

  mainFlex: {
    flexDirection: 'row',
    flexWrap: 'no-wrap',
  },

  col: {
    display: 'grid',
    width: '50%',
    height: '50%',
    padding: 8
  },

  mainImg: {
    position: 'relative',
    width: '100%',
    borderRadius: 10,
    margin: 0,
    marginBottom: 16,
  },
});

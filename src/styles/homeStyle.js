import {StyleSheet} from 'react-native'


const homeStyles = StyleSheet.create({

  container:{
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: 'rgb(20, 20, 20)'//branco
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 400,
    height: 250,
    backgroundColor: 'rgb(190, 180, 215)',//roxo
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 20,
    textAlign: 'center'
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  textoItem: {
    fontSize: 20,
    padding: 15,
    borderBottomWidth: 1
  }
})

export default homeStyles;

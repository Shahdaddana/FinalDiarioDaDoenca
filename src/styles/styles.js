import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(255, 180, 200)'//rosa
    },
    containerHome:{
      flex:1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'rgb(255, 180, 200)'//rosa
    },
    input: {
      marginTop: 10,
      padding: 10,
      width: 300,
      backgroundColor: 'rgb(190, 180, 215)',//roxo
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 20,
      textAlign: 'center'
    },
    logo: {
      width: 200,
      height: 200,
      borderRadius: 100,
      marginBottom: 3
    },
    botao:{
      marginTop: 10,
      width: 300,
      height: 42,
      backgroundColor: 'rgb(255, 255, 255)',//branco
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100
    },
    botaoText:{
      fontSize: 21,
      fontWeight: 'bold',
      color: 'rgb(255, 180, 200)'//rosa
    },
    botaoCadastro:{
      marginTop: 10,
      width: 150,
      height: 42,
      backgroundColor: 'rgb(255, 255, 255)',//branco
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100
    },
    botaoTeste:{
      fontSize: 21,
      fontWeight: 'bold',
      color: 'rgb(255, 255, 255)'//branco
    },
    text:{
      fontSize: 25,
      fontWeight: 'bold',
      color: 'black'
    },
  
  });

export default styles;

import React, { Component } from 'react';
import {
  Alert,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  PanResponder
} from 'react-native';

import styles from '../styles/styles.js';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //LOGIN
      textInputLogin: '',
      getLogin: '',
      //SENHA
      textInputSenha: '',
      getSenha: '',
      //SENHA NOVAMENTE
      textInputSenhaNovamente: '',
      getSenhaNovamente: '',
      //LOGIN TENTATIVA DO USUARIO
      textInputLoginTentativa: '',
      getInputLoginTentativa: '',
      //SENHA TENTATIVA DO USUARIO
      textInputSenhaTentativa: '',
      getInputSenhaTentativa: '',
    }
  }

  getEntrada = () => {
    //LOGIN
    AsyncStorage.getItem('login').then(
      value => this.setState({getLogin: value}))
    //SENHA
    AsyncStorage.getItem('senha').then(
      value => this.setState({getSenha: value}))
    //SENHA NOVAMENTE
    AsyncStorage.getItem('senhaNovamente').then(
      value => this.setState({getSenhaNovamente: value}))
  }

  tentarEntrar = () => {
    const { route, navigation } = this.props;
    const LOGIN = this.state.getLogin;
    const SENHA = this.state.getSenha;
    const LOGINTENTATIVA = this.state.textInputLoginTentativa;
    const SENHATENTATIVA = this.state.textInputSenhaTentativa;

    if ((LOGIN == LOGINTENTATIVA) && (SENHA == SENHATENTATIVA)){
      navigation.navigate('Home')
    }
    else
    alert('Credenciais Incorretas');
  }

  umaVez = () =>{
    AsyncStorage.setItem('ultimoDiario', '0')
  }

  render () {

    const { route, navigation } = this.props;
    const { login, senha } = route.params;
  
    return(
    <View style={styles.container}>
      {this.umaVez}

        <Image
        source={require('/MeuDiarioDaDoenca/src/assets/conceito.png')}
        style={styles.logo}/>
  
        <TextInput
        style={styles.input}
        placeholder="Usuario"
        autoCorrect={false}
        value={this.state.textInputLoginTentativa}
        onChangeText={data => this.setState({textInputLoginTentativa: data})}/>
  
        <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        autoCorrect={false}
        value={this.state.textInputSenhaTentativa}
        onChangeText={data => this.setState({textInputSenhaTentativa: data})}/>
  
        <TouchableOpacity
        style={styles.botao}
        onPress={this.tentarEntrar}>
          <Text style={styles.botaoText}>Home</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
        style={styles.botaoCadastro}
        onPress={() => { navigation.navigate('Cadastro')}}>
          <Text style={styles.botaoText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text>|{login}|</Text> 
        <Text>|{senha}|</Text>

        <TouchableOpacity
        style={styles.botao}
        onPress={this.getEntrada}>
          <Text style={styles.botaoText}>Ler</Text>
        </TouchableOpacity>

        <Text style={styles.text}>login: {this.state.getLogin}</Text>
        <Text style={styles.text}>senha: {this.state.getSenha}</Text>
        <Text style={styles.text}>senha2: {this.state.getSenhaNovamente}</Text>

        <Text style={styles.text}> {this.state.textInputLoginTentativa}</Text>

        <TouchableOpacity
        style={styles.botaoCadastro}
        onPress={() => { navigation.navigate('Home')}}>
          <Text style={styles.botaoText}>Ir para Home</Text>
        </TouchableOpacity>

  
      </View>
    )
  }
}
 
import React, { Component, useState } from 'react';
import {
  Alert,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  PanResponder,
  Button
} from 'react-native';

import styles from '../styles/styles.js';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';


export default class Cadastro extends Component {
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
    }
  }
  
  setEntrada = () => {
    const { route, navigation } = this.props;
    const LOGIN = this.state.textInputLogin;
    const SENHA = this.state.textInputSenha;
    const SENHANOVAMENTE = this.state.textInputSenhaNovamente;
    const aLOGIN = this.state.textInputLogin.length;
    const aSENHA = this.state.textInputSenha.length;

    //Se login entre 4 - 20
    if ((aLOGIN > 4) && (aLOGIN <20)){
      //Se senhas iguais
      if (SENHA == SENHANOVAMENTE){
        //Se a senha for maior que 5
        if (aSENHA >5){

          navigation.navigate('Login', {
            login: LOGIN,
            senha: SENHA,
          })
          alert('Cadastro realizado com sucesso')
          
          AsyncStorage.setItem('login', this.state.textInputLogin);
          this.setState({textInputLogin: ''})

          AsyncStorage.setItem('senha', this.state.textInputSenha);
          this.setState({textInputSenha: ''})

          AsyncStorage.setItem('senhaNovamente', this.state.textInputSenhaNovamente);
          this.setState({textInputSenhaNovamente: ''})
          
        }
        else
        alert('Senha curta');
      }
      else
      alert('Senhas diferentes');
    }
    else
    alert('Login curto');
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
    

  render () {
    const {  route, navigation } = this.props;
  
    return(
      <View style={styles.container}>

        <Image
        source = {require('/MeuDiarioDaDoenca/src/assets/conceito.png')}
        style={styles.logo}/>

        <TextInput
        style={styles.input}
        placeholder="Digite seu Usuário"
        autoCorrect={false}
        value={this.state.textInputLogin}
        onChangeText={data => this.setState({textInputLogin: data})}/>

        <TextInput
        style={styles.input}
        placeholder="Digite sua Senha"
        secureTextEntry={true}
        autoCorrect={false}
        value={this.state.textInputSenha}
        onChangeText={data => this.setState({textInputSenha: data})}/>

        <TextInput
        style={styles.input}
        placeholder="Digite novamente sua Senha"
        secureTextEntry={true}
        autoCorrect={false}
        value={this.state.textInputSenhaNovamente}
        onChangeText={data => this.setState({textInputSenhaNovamente: data})}/>

        <TouchableOpacity
        style={styles.botao}
        onPress={this.setEntrada}>
          <Text style={styles.botaoText}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.botao}
        onPress={this.getEntrada}>
          <Text style={styles.botaoText}>Ler</Text>
        </TouchableOpacity>

        <Text style={styles.text}>login: {this.state.getLogin}</Text>
        <Text style={styles.text}>senha: {this.state.getSenha}</Text>
        <Text style={styles.text}>senha2: {this.state.getSenhaNovamente}</Text>


      </View>
    )
  }
}
  
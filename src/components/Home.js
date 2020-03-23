import React, { Component } from 'react';
import {
  Alert,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  PanResponder
} from 'react-native';

import styles from '../styles/styles.js';
import homeStyles from '../styles/homeStyle.js';
import 'react-native-gesture-handler';
import { FlatList } from 'react-native-gesture-handler';


export default class Home extends Component{
  render(){
    const dados = [
      {key: 'linha 1'},
      {key: 'linha 2'},
      {key: 'linha 3'},
      {key: 'linha 4'},
    ]

    return(
      <View style={styles.containerHome}>
      
      <TextInput
      style={homeStyles.input}
      placeholder="digite sobre sua vida"
      autoCorrect={false}
      multiline={true}
      //value={this.state.textInputLoginTentativa}
      //onChangeText={data => this.setState({textInputLoginTentativa: data})}
      />

      <FlatList
      data={dados}
      renderItem = { ({item}) => <Text style={homeStyles.textoItem}>{item.key}</Text>}
      
      />

      
    </View>

    )
  }
}
  
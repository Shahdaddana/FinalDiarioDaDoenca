import React, {useState, Component} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import 'react-native-gesture-handler';

export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      //TASK
      textInputTask: '',
      getTask: '',
      //BANCO
      textInputBanco: '',
      //getBanco: [],
    }
    this.banco = []
    this.lastIndice = 0
    //this.iniciar()
  }

  iniciar = () => {
    AsyncStorage.getItem('ultimoDiario').then(valor => this.lastIndice = 1*(valor))
  }

  
  
  /*
  const [task, updateTask] = useState('');
  const [tasks, updateTasks] = useState([]);
  const [banco, updateBanco] = useState([]);
  let lastIndice = 0
  AsyncStorage.getItem('login').then(
  value => this.setState({getLogin: value}))
  */
  atualizaFeed = () => {
    for ( let i=this.lastIndice; i>=0 && i>this.lastIndice-7; i-- ){
      AsyncStorage.getItem( i+'').then(
        value => this.banco.push(value)
        //value=>this.setState   ({getBanco.append(value)      })
                  //updateBanco
      )
    }
  }
  

  handleAdd = () => {
    if (this.state.textInputTask != '') {
      if (this.lastIndice == 0) {
        this.iniciar()
      }

      //updateTasks([...tasks, task]);
      AsyncStorage.setItem(this.lastIndice+'', this.state.textInputTask);
      this.atualizaFeed() 
      this.setState({textInputTask: ''})
      this.lastIndice++
      AsyncStorage.setItem('ultimoDiario', this.lastIndice+'')
    }
  };

  //const handleRenderTask = ({item}) => <Text style={styles.item}>{item}</Text>;
  render() {
    const puxarDaLista = ({item}) => <Text style={styles.item}>{item}</Text>;

    return (
      <SafeAreaView>
        <View style={styles.container}>
          {this.atualizaFeed}
          <Text style={styles.title}>To-Do List</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.field}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              value={this.state.textInputTask}
              onChangeText={text => this.setState({ textInputTask: text })}
            />
            <TouchableWithoutFeedback onPress={this.handleAdd}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <FlatList
            data={this.banco}//tasks
            keyExtractor={item => item}
            renderItem={puxarDaLista}//handleRenderTask
          />
        </View>
      </SafeAreaView>
    )
  }
}


//
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 20,
  },
  field: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    padding: 10,
    fontSize: 15,
    color: '#333',
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#00cc99',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fdfdfd',
  },
  item: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    padding: 10,
    marginTop: 15,
    borderRadius: 3,
  },
  form: {
    flexDirection: 'row',
  },
});
//



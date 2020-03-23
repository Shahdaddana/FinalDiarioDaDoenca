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

/////////////
class App extends Component{
  render(){
  
  const [task, updateTask] = useState('');
  const [tasks, updateTasks] = useState([]);
  const [banco, updateBanco] = useState([]);

  let lastIndice = 0

  const atualizaFeed = () => {
    for ( let i=lastIndice; i>=0 && i>lastIndice-5; i-- ){
      AnsyncStorage.getItem(i.toString() ).then(
        value=>updateBanco([...banco, value])
      )
    }
  }

  const handleAdd = () => {
    if (task.trim()) {
      updateTasks([...tasks, task]);
      AsyncStorage.setItem(lastIndice.toString(), task);
      atualizaFeed()
      updateTask('');
    }
  };

  //const handleRenderTask = ({item}) => <Text style={styles.item}>{item}</Text>;
  const puxarDaLista = ({item}) => <Text style={styles.item}>{item}</Text>;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {atualizaFeed()}
        <Text style={styles.title}>To-Do List</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.field}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            onChangeText={text => updateTask(text)}
            value={task}
          />
          <TouchableWithoutFeedback onPress={handleAdd}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <FlatList
          data={banco}//tasks
          keyExtractor={item => item}
          renderItem={puxarDaLista}//handleRenderTask
        />
      </View>
    </SafeAreaView>
  );
};
}

export default App


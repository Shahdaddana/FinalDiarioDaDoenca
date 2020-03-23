import React, { Component } from 'react'
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
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../components/Home.js'
import Login from './Login.js';
import Cadastro from './Cadastro.js';

const Stack = createStackNavigator();

export default function RootStack() {
    return (
    <NavigationContainer>
    <Stack.Navigator>

        <Stack.Screen name="Login"    component={Login}   initialParams={{ login: 'null', senha: 'null' }}/>
        <Stack.Screen name="Home"     component={Home}    initialParams={{ otherParam: 'nadinha' }}/>
        <Stack.Screen name="Cadastro" component={Cadastro}initialParams={{ otherParam: 'nadinha' }}/>

    </Stack.Navigator>
    </NavigationContainer>
    );
  }

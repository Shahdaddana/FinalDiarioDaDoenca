import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from "./src/components/testeReduxEntrada2";

import React from 'react';
import ReactDOM from 'react-dom';
//ReactDOM.render(<App />, document.getElementById('root'));
AppRegistry.registerComponent(appName, () => App);
//



import {AppRegistry} from 'react-native';
import MainRouter from './src/route/route';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainRouter);

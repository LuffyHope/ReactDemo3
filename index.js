import { AppRegistry } from 'react-native';
import {name as appName} from './app.json';

import a_page from './A_page';
import b_page from './B_page';
import c_page from './C_page';
import {
    createStackNavigator,
} from 'react-navigation-stack';

import {
    createAppContainer,
} from 'react-navigation';

const AppNavigator = createStackNavigator({
    pa: {screen: a_page},
    pb: {screen: b_page},
    pc: {screen: c_page},
}, {
    initialRouteName: 'pa',
});

const App = createAppContainer(AppNavigator);

AppRegistry.registerComponent(appName, () => App);

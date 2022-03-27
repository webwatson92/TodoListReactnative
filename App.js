/* 
* Author : OUATTARA EL HADJ
* PSEUDO / webwatson92
* Dev Javascript Junior
*/
import React from 'react';
import {
  StyleSheet,SafeAreaView,
  Text
 } from 'react-native';
import TasksScreen from './src/screens/Task';

const App = ({children, title }) => {
  return ( 
        <SafeAreaView style={{flex:1}}>
            <TasksScreen /> 
        </SafeAreaView>
        
    )
};

const styles = StyleSheet.create({

});

export default App;

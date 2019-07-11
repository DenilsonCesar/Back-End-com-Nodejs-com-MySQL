import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';


import InicioScreen from './inicio';
import AnotacoesScreen from './anotacoes';

export default createBottomTabNavigator( {
  Inicio: { screen: InicioScreen,
    NavigationOptions: {
      tabBarLabel: "Inicio",
      tabBarIcon: ({tintColor}) => (
        <Icon name = "home" size={28} color={tintColor}/>
      )}
  },
  Anotações: { screen: AnotacoesScreen,
    NavigationOptions: {
      tabBarLabel: "Anotações",
      tabBarIcon: ({tintColor}) => (
        <Icon name = "create" size={28} color={tintColor}/>
      )
    }
  }
},
  {
    initialRouteName: 'Inicio',
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: '#8e44ad'
      }
    }
});


 



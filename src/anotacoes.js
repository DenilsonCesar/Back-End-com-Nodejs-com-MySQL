import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const url = 'http://192.168.0.105:4545/Tables';

export default class AnotacoesScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      //vetor para receber uma tupla do banco de dados
      apiNota: [],
      //naNota: [],
    }
    //Componentes criados para receber valores do banco de dados
    this.nota_id = null;
    this.titulo = null;
    this.descricao = null;
    }

    //Para atualizar novas anotações
    getButton = () => {
        fetch( 'http://192.168.0.105:4545/nota' ,{
          method: 'GET'
        }).then((responseNota) => {
            return responseNota.json();
        }).then((jsonNota) => {
          //console.log(jsonNota);
           this.setState({apiNota: jsonNota})
          //console.log(this.state.apiNota)
        }).done();
        this.nota_id = null;
      }

    //Para pesquisar uma anotação especifica
    searchButton = () => {
      fetch( 'http://192.168.0.105:4545/nota' + (this.nota_id),{
        method: 'GET'
      }).then((responseNota) => {
          return responseNota.json();
      }).then((jsonNota) => {
        console.log(jsonNota);
        this.setState({apiNota: jsonNota})
        console.log(this.state.apiNota)
      }).done();
      this.nota_id = null;
    }

    //Para deletar uma anotação
    deleteButton = () => {
      fetch( 'http://192.168.0.105:4545/nota' + (this.nota_id),{
        method: 'DELETE'
      }).then((responseNota) => {
        //console.log(responseNota.rows);
      }).done();
      this.nota_id = null;
    }

     //Para atualizar uma anotação
     updateButton = () => {
      fetch( 'http://192.168.0.105:4545/nota' ,{
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ titulo: this.titulo, descricao: this.descricao, nota_id: this.nota_id })
      }).then((responseNota) => {
          return responseNota.json();
      }).done();
      this.nota_id = null;
      this.titulo = null;
      this.descricao = null;
      }

  render() {
    const nota = this.state.apiNota;
    //variavel com função callback para mostrar atualização das anotações
    let notaDisplay = nota.map(function(jsonNota = {jsonNota}){
      return(
        <View key = {jsonNota.nota_id}>
            <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'red'}}>{jsonNota.nota_id} | </Text>
            <Text style={{color: 'blue'}}>{jsonNota.titulo} | </Text>
            <Text style={{color: 'red'}}>{jsonNota.descricao} | </Text>
        </View>
        </View>
      )}
    );
       return(
           <View >
             <View style={{flexDirection: 'row'}}>
                <TextInput style={styles.busca} placeholder="Digite id" 
                      onChangeText={(text)=>{this.nota_id = text}}
                      value = {this.nota_id}>
                </TextInput>
                <TouchableOpacity style={styles.btnBuscar}
                      onPress={this.searchButton}>
                    <Icon name='search' size={50} style={styles.btnBuscarText}/>
                </TouchableOpacity>
             </View>
                
               
             <TouchableOpacity style={styles.btnSalvar} onPress={this.getButton}>
                <Text style={styles.btnSalvarText}>Atualizar</Text>
             </TouchableOpacity>
 
             <TouchableOpacity style={styles.btnSalvar} onPress={this.updateButton}>
                 <Text style={styles.btnSalvarText}>Alterar</Text>
             </TouchableOpacity>
 
             <TouchableOpacity style={styles.btnSalvar} onPress={this.deleteButton}>
                 <Text style={styles.btnSalvarText}>Excluir</Text>
             </TouchableOpacity>

             <ScrollView>{notaDisplay}</ScrollView>
            
         </View>
       )
      }
  }

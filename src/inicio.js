import React, {Component} from 'react';
import { Text, View, TouchableOpacity, TextInput, Button, ScrollView, Alert } from 'react-native';

import styles from './styles';

export default class InicioScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      apiNota: [],
      naNota: [],
    }
    this.RA = null,
    this.Nome_Aluno = null,
    this.Sobrenome_Aluno = null,
    this.CPF = null,
    this.Status_Aluno = null,
    this.Cod_Turma = null,
    this.Sexo = null,
    this.Cod_Curso = null,
    this.Nome_Pai = null,
    this.Nome_Mae = null,
    this.Email = null,
    this.Whatsapp = null
}

saveButton = () => {
  fetch('http://localhost:4545/aluno',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      { 
        RA: this.RA,
        Nome_Aluno: this.Nome_Aluno, 
        Sobrenome_Aluno: this.Sobrenome_Aluno,
        CPF: this.CPF,
        Status_Aluno: this.Sobrenome_Aluno,
        Cod_Turma: this.Cod_Turma,
        Sexo: this.Sexo,
        Cod_Curso: this.Cod_Curso,
        Nome_Pai: this.Nome_Pai,
        Nome_Mae: this.Nome_Mae,
        Email: this.Email,
        Whatsapp: this.Whatsapp,
      }
    )
  }).then((responseNota) => {
      return responseNota.json();
  }).then((jsonNota) => {
    //console.log(jsonNota);
    this.setState({naNota: jsonNota})
    //console.log(this.state.naNota)
  }).done();
    this.RA = null,
    this.Nome_Aluno = null,
    this.Sobrenome_Aluno = null,
    this.CPF = null,
    this.Status_Aluno = null,
    this.Cod_Turma = null,
    this.Sexo = null,
    this.Cod_Curso = null,
    this.Nome_Pai = null,
    this.Nome_Mae = null,
    this.Email = null,
    this.Whatsapp = null
}

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.cabecario}>Anotação</Text>
        <TextInput style={styles.titulo} placeholder="Digite o titulo de sua anotação" 
           onChangeText={(text)=>{this.titulo = text}}
           value = {this.titulo}>
        </TextInput>
        
        <TextInput multiline = {true} editable = {true} style={styles.descricao} placeholder="Digite sua Anotação" 
          onChangeText={(text)=>{this.descricao = text}} 
          value={this.descricao}></TextInput>
       
        <TouchableOpacity style={styles.btnSalvar} onPress={this.saveButton}>
          <Text style={styles.btnSalvarText}>Salvar</Text>
        </TouchableOpacity>

      </View>
    )
  } 
}
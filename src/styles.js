import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#FFF',
    },
    //primeira tela
    cabecario: {
      fontSize: 40,
      textAlign: 'right',
      margin: 20,
      color: '#8e44ad',
      fontWeight: 'bold'
    },
    titulo: {
      textAlign: 'left',
      backgroundColor: 'white',
      borderColor: "#8e44ad",
      borderWidth: 2,
      color: '#8e44ad',
      margin: 20,
      fontSize: 20,
      borderRadius: 10,
    },
    descricao: {
      backgroundColor: 'white',
      color: '#8e44ad',
      borderColor: "#8e44ad",
      borderWidth: 2,
      margin: 20,
      marginTop: 10,
      fontSize: 20,
      borderRadius: 10,
      height: 200,
    },
    btnSalvar: {
      backgroundColor: '#8e44ad',
      width: 440,
      paddingBottom: 9,
      paddingTop: 9,
      borderRadius: 10,
      //alignItems: 'center',
     // textAlign: 'center',
      margin: 10,
      flexDirection: 'column',
      marginLeft: 20,
    },
    btnSalvarText: {
      fontSize:30,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    btnBuscar: {
      backgroundColor: '#8e44ad',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      width: 75,
      height: 50,
      textAlign:'center',
      marginTop: 18
    },
    busca: {
      textAlign: 'left',
      backgroundColor: 'white',
      borderColor: "#8e44ad",
      borderWidth: 2,
      color: '#8e44ad',
      margin: 20,
      fontSize: 20,
      borderRadius: 10,
      width: 350,
    },
    btnBuscarText: {
      color: 'white',
      fontSize: 30,
    }
  });

  export default styles;
  

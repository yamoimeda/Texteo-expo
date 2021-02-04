
import React, { useState, Component } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View,StyleSheet } from 'react-native'
import {Colors} from '../componentes/Colors';
import { StackActions, NavigationActions } from 'react-navigation';

export default  class Chats extends Component {
    
    constructor(props){
      super(props)
      this.state = {
          isHidden : false,
          data:undefined,
          loading:true, 
          setLoading:true,
          email:'',
          opt:false,
          perfil:false
        }
    }
    showHideText = () => {
      this.setState({isHidden : !this.state.isHidden})
    }

    registrar() {

        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Inicio' })],
          });
          this.props.navigation.dispatch(resetAction);

    }

    componentDidMount = async () => {
      
    }
    render() {
      return (
        <View style={styles.container}>
            <View
                style={{ height:'30%', width: '100%',marginTop:30 }}>
                <Image
                    style={styles.logo}
                    source={require('../componentes/icon.png')}
                />
                   
            </View>
            <View  style={{ height:'70%', width: '100%'}}>
                <View  style={styles.inputview}>
                    <View style={{justifyContent:'center',paddingLeft:30}}>
                    <Image
                    style={styles.bandera}
                    source={require('../componentes/panama.png')}
                />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder='Numero de Celuar'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(numero) => this.setState({numero})}
                        value={this.state.numero}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />

                </View>
               
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.registrar()}>
                    <Text style={styles.buttonTitle}>REGISTRARME</Text>
                </TouchableOpacity>
            </View>
        </View>
      );
    }
  }
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.oscuro
    },
    title: {

    },
    logo: {
        height: 150,
        width: 150,
        alignSelf: "center",
    },
    input: {
        height: 48,
        width:'65%',
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: Colors.principal,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    inputview:{
        flexDirection:'row',
        justifyContent:'center'
    },
    bandera: {
        alignSelf: "center",
    },
})
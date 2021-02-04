import React , {useState, useEffect, useRef,Component} from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    Animated,
    Image,
    Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from '@expo/vector-icons/Entypo';
import Icon from '@expo/vector-icons/MaterialIcons';
import Fonta from '@expo/vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import Perfiles from '../componentes/perfil';
import Messages from '../componentes/mensajes';
import { firebase } from '../firebase/config';
import {Colors} from '../componentes/Colors';

const URL = `https://api.github.com/users`;

import * as Contacts from 'expo-contacts';
    

export default  class Chats extends Component {
    
    constructor(props){
      super(props)
      this.state = {
          isHidden : false,
          data:undefined,
          loading:true, 
          setLoading:true,
          chat:true,
          opt:false,
          perfil:false,
          user: 'bt8KmtMpbicxRyqDvrb1'
        }
    }
    showHideText = () => {
      this.setState({isHidden : !this.state.isHidden})
    }

    async componentDidMount() {


        const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.PhoneNumbers,Contacts.Fields.Name],
                });

                if (data.length > 0) {
                const contact = data[0];
                console.log(contact);
        }
      }
        
        const doc = firebase.firestore().collection('chats');

        const snapshot = await doc.where('users','array-contains',this.state.user).get();
        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
          }  
          
          snapshot.forEach(doc => {


            console.log(doc.id, '=>', doc.data());
          });

       
        const resp = await fetch(URL);
        const data = await resp.json();
        this.setState({data: data,loading:false,setLoading:false});

    }
    render() {
      return (
        <LinearGradient
        colors={['#ce7329', '#b26120', '#7A1B00']}
        style={styles.gradient}
       >
           
           <View style={styles.headerContainer}>
                <Text style={styles.header}>Mensajes</Text>
                <Icon name='add' color='#fff' size={Dimensions.get('window').width/11}/>


                
           </View>
           <View style={styles.ops}>
                <View style={styles.col}>
                    <View  style={styles.menus}>
                        <Entypo name='chat' color= {this.state.chat ? '#ce7329' : '#fff' } size={25}/>
                    </View>
                    
                    <View style={styles.menus}>
                        <Fonta name='user-circle-o' color={this.state.perfil ? '#ce7329' : '#fff' } size={25}/>
                    </View>
                    <View style={styles.menus}>
                        <Entypo name='dots-three-horizontal' color={this.state.opt ? '#ce7329' : '#fff' } size={25}/>
                    </View>
                   
             </View>
                <ScrollView>
                    {
                        this.state.loading ? 
                        (
                            <ActivityIndicator size='large' color='#f20042' style={{marginTop:'30%'}}/>
                        ):(
                            <Animated.View style={ styles.list}>
                                {
                                    this.state.data.map((item, index) => (
                                            <Messages
                                                key={item.id}
                                                username={item.login}
                                                uri={item.avatar_url}
                                                count={Math.floor(Math.random() * 3)}
                                                onPress={()=>{
                                                    this.props.navigation.navigate('Chats',{
                                                        itemId:item.id,
                                                        itemName:item.login,
                                                        itemPic:item.avatar_url
                                                    });
                                                }}
                                            />
                                    ))}
                            </Animated.View>
                        )}
                </ScrollView>
           </View>
       </LinearGradient>
      );
    }
  }
  


const styles = StyleSheet.create({
    list:{
        backgroundColor:Colors.oscuro,
    },
    card:{
        marginLeft:300,
        width:400,
        flexDirection:'row',
        marginBottom:'5%'
    },
    gradient:{
        height:'100%',
        position:"absolute",
        left:0,
        right:0,
        top:0,
        paddingHorizontal:20,
        paddingTop:10
    },
    headerContainer:{
        height:'10%',
        flexDirection:'row',
        alignItems:'center',
        paddingTop:5

    },
    header:{
        fontFamily:'Montserrat_800ExtraBold',
        color:Colors.blanco,
        flex:1,
        fontSize: Dimensions.get('window').width/16
    },
    proContainer:{
        marginRight:-20,
        alignSelf:'center',
    },
    ops:{

        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        height: '90%',
        backgroundColor: Colors.oscuro,
        marginHorizontal:-20,
        
    },
    col:{
       
        flexDirection:'row',
        marginTop:15,
        marginHorizontal:20,
        paddingBottom:10,
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:Colors.principal
    },
    day:{
        fontFamily:'Montserrat_800ExtraBold',
        color:Colors.blanco,
        flex:1,
        fontSize:20
    },
    menus:{
        width:'33.3%',
        alignItems:'center',

    }
})
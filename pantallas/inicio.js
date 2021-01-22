import React , {useState, useEffect, useRef,Component} from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    Animated,
    Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from '@expo/vector-icons/Entypo';
import Icon from '@expo/vector-icons/MaterialIcons';
import Fonta from '@expo/vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import Perfiles from '../componentes/perfil';
import Messages from '../componentes/mensajes';

const URL = `https://api.github.com/users`;

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
          perfil:false
        }
    }
    showHideText = () => {
      this.setState({isHidden : !this.state.isHidden})
    }

    componentDidMount = async () => {
        const resp = await fetch(URL);
        const data = await resp.json();
        this.setState({data: data,loading:false,setLoading:false});

    }
    render() {
      return (
        <LinearGradient
        colors={['#FF7200', '#B73D00', '#7A1B00']}
        style={styles.gradient}
       >
           
           <View style={styles.headerContainer}>
                <Text style={styles.header}>Mensajes</Text>
                <Icon name='add' color='#fff' size={30}/>


                
           </View>
           <View style={styles.ops}>
                <View style={styles.col}>
                    <View  style={styles.menus}>
                        <Entypo name='chat' color= {this.state.chat ? '#FF7200' : '#fff' } size={25}/>
                    </View>
                    
                    <View style={styles.menus}>
                        <Fonta name='user-circle-o' color={this.state.perfil ? '#FF7200' : '#fff' } size={25}/>
                    </View>
                    <View style={styles.menus}>
                        <Entypo name='dots-three-horizontal' color={this.state.opt ? '#FF7200' : '#fff' } size={25}/>
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
                                                    props.navigation.navigate('Chats',{
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
        backgroundColor:'#000816',
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

    },
    header:{
        fontFamily:'Montserrat_800ExtraBold',
        color:'#FFF',
        flex:1,
        fontSize:22
    },
    proContainer:{
        marginRight:-20,
        alignSelf:'center',
    },
    ops:{

        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        height: '90%',
        backgroundColor:'#000816',
        marginHorizontal:-20,
        
    },
    col:{
       
        flexDirection:'row',
        marginTop:15,
        marginHorizontal:20,
        paddingBottom:10,
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'#B73D00'
    },
    day:{
        fontFamily:'Montserrat_800ExtraBold',
        color:'#FFF',
        flex:1,
        fontSize:20
    },
    menus:{
        width:'33.3%',
        alignItems:'center',

    }
})
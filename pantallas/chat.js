import React,{useState,useRef ,Component} from 'react';
import {View,Text,Image,StyleSheet,ImageBackground,Dimensions,KeyboardAvoidingView,Platform, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/AntDesign';
import LastWatch from '../componentes/LastWatch';
import Received from '../componentes/Received';
import Sent from '../componentes/Sent';
import Data from '../Data.json';
import Input from '../componentes/Input'; 
import { firebase } from '../firebase/config'

export default class Discussion extends Component {
    
    constructor(props){
      super(props)
      this.state = {
        inputMessage:'',
        setMessage:'',
        Data:[],
        


        }
    }
    componentDidMount (){
       
        const { itemName , itemPic } = this.props.route.params;
        this.setState({itemName:itemName, itemPic:itemPic})

        
        
    }

    send = async () => {
      var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    var hora = hours-12
    if (hora > 0){
        hora = hora
    } else{
        hora= hours
    }
    
    
        var Data = this.state.Data
        Data.push({id:this.state.inputMessage,message:this.state.inputMessage});
        
        const docRef = firebase.firestore().collection('chats').doc('D9c82KP8S4zhtoNVJt37').collection('mensajes')
    
        await docRef.add({     
            mesaje: this.state.inputMessage,
            user: 'bt8KmtMpbicxRyqDvrb1',
            tiempo: date + '-' + month + '-' + year + ' ' + hora + ':' +min + ':' + sec
  
        })

        this.setState({Data:Data,inputMessage:''})
    };

    render(){
        
        return(
        
            <ImageBackground
            source={{uri: this.state.itemPic}}  style={styles.image} resizeMode={'repeat'} 
            style={styles.gradient}
           >
                <KeyboardAvoidingView   behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
                <View style={styles.fondo}>
               
               <View style={styles.headerContainer}>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.goBack()}
                        >
                            <Icon name='left' color='#FFF' size={Dimensions.get('window').width/12}/>
                        </TouchableOpacity>
                        <Text style={styles.username}>{this.state.itemName}</Text>
                        <Image source={{uri:this.state.itemPic}} style={styles.avatar}/>
                </View>
                    
               <View   style={styles.ops}>
               
                    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}   ref={ref => {this.scrollView = ref}}
    onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}>
                    
                    
                        <LastWatch  checkedOn='Yesterday'/>
                        <Received 
                            message={Data[0].message}
                        />
                        <Sent
                            message={Data[1].message}
                        />
                        <Received 
                            message={Data[2].message}
                        />
                         <Sent
                            message={Data[3].message}
                        />
                        <LastWatch  checkedOn='Hoy'/>
                        <Received 
                            message={Data[4].message}
                        />
                        <Received 
                            message={Data[4].message}
                        />
                        {
                             this.state.Data.map((item, index) => (
                                <Sent
                                key={index}
                                message={item.message}
                            />

                             ))
                        }
                        <View style= {{height:70}}>
    
                        </View>
              
                    </ScrollView>
                    
              <Input
                inputMessage={this.state.inputMessage}
                setMessage={(inputMessage)=> this.setState({inputMessage})}
                onSendPress={this.send}
              />
              </View>
              </View>
              </KeyboardAvoidingView>
          </ImageBackground>
          
        )
    }
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        left:0,
        right:0,
        top:0,
        height:"100%"
    },
    main:{
        backgroundColor:'#FFF',
        height:'88%',
        paddingHorizontal:20,
        borderBottomLeftRadius:35,
        borderBottomRightRadius:35,
        paddingTop:40
    }
    ,
    username:{
        color:"#FFF",
        fontFamily:'Montserrat_700Bold',
        fontSize:Dimensions.get('window').width/20,
        flex:1,
        textAlign:'center'
    },
    avatar:{
        width:Dimensions.get('window').width/8,
        height:Dimensions.get('window').width/8,
        borderRadius:50,
    },
    gradient:{
        height:'100%',
        position:"absolute",
        left:0,
        right:0,
        top:0,
        width:'100%',
    },
    headerContainer:{
        height:'12%',
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:'5%'

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
        height: '88%',
        backgroundColor:'#000816',
        width:'100%'
        
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
    scroll:{
        flex:1,
        height:'100%'

    },
    
    fondo:{
        backgroundColor:'rgba(59, 59, 59, 0.3)',
        height:'100%',
    }


})
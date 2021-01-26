import React,{useState,useRef} from 'react';
import {View,Text,Image,StyleSheet,ImageBackground,Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/AntDesign';
import LastWatch from '../componentes/LastWatch';
import Received from '../componentes/Received';
import Sent from '../componentes/Sent';
import Data from '../Data.json';
import Input from '../componentes/Input'; 

const Discussion = ({ route, navigation }) => {
    const { itemName , itemPic } = route.params;
    const [inputMessage, setMessage] = useState('');
    const scrollViewRef = useRef();
    const send = () => {
        Data.push({id:inputMessage,message:inputMessage});
        setMessage('');
    };

    var txt = []
    for (var i = 5; i < Data.length; i++){
        txt.push(<Sent key={Data[i].id} message={Data[i].message}/>);
    }
    console.log(Data)

    return(
        <ImageBackground
        source={{uri: itemPic}}  style={styles.image} resizeMode={'repeat'} 
        style={styles.gradient}
       >
            <View style={styles.fondo}>
           
           <View style={styles.headerContainer}>
                    <TouchableOpacity
                        onPress={()=>navigation.goBack()}
                    >
                        <Icon name='left' color='#FFF' size={Dimensions.get('window').width/10}/>
                    </TouchableOpacity>
                    <Text style={styles.username}>{itemName}</Text>
                    <Image source={{uri:itemPic}} style={styles.avatar}/>
            </View>
                
           <View style={styles.ops}>
              
                <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}   ref={scrollViewRef}
      onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
                
                
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
                    <View>
                        {txt}
                    </View>
                    <View style= {{height:70}}>

                    </View>
          
                </ScrollView>
                
          <Input
            inputMessage={inputMessage}
            setMessage={(inputMessage)=> setMessage(inputMessage)}
            onSendPress={send}
          />
          </View>
          </View>
      </ImageBackground>
    )
}
export default Discussion;

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
        paddingBottom:100,
    },
    
    fondo:{
        backgroundColor:'rgba(59, 59, 59, 0.3)',
        height:'100%',
    }


})
import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image,ImageBackground,Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const randomTime = () => {
    const hrs = Math.round(Math.random()*12);
    const mins = Math.round(Math.random()*60);
    const hFormat = hrs < 10 ? '0' : '';
    const mFormat = mins < 10 ? '0' : '';
    const amPm = hrs < 12 ? 'AM' : 'PM';
    return String(hFormat + hrs + ":"+ mFormat + mins + " " + amPm)
}

const Messages = ({ username, uri, count, onPress }) => {
    return(
       <TouchableOpacity 
        onPress={onPress}
        style={styles.container}
       >
           <ImageBackground source={{uri: uri}}  style={styles.image} resizeMode={'cover'} borderRadius={5} opacity={1}>
               <View style={styles.fondo}>
               <View style={{marginLeft:10}}>
                 <Text style={styles.username}>{username}</Text>
                 <Text style={styles.text}>Hello, How are you</Text>
               </View>
               {
               count > 0 ? (
                   <LinearGradient
                    colors={['#005aff', '#003eb2', '#001233']}
                    style={styles.gradientStyle}
                   >
                       <Text style={styles.count}>{count}</Text>
                   </LinearGradient>
               ):
               
                null
           }
               <Text style={styles.duration}>{randomTime()}</Text>
               </View>
               </ImageBackground>          
               
       </TouchableOpacity>
    )
}
export default Messages;

const styles = StyleSheet.create({
    container:{
        borderRadius:5,
        flexDirection:'row',
        marginHorizontal:20,
        alignItems:'center',
        marginTop:15,
    },
    gradientStyle:{
        position:'absolute',
        top:-5,
        left:-5,
       height:20,
       width:20,
       borderRadius:10,
       alignItems:'center',
       justifyContent:'center',
       marginRight:20 
    },
    count:{
        color:'#fff',
        fontFamily:'Montserrat_700Bold',
    },
    image:{
        width:'100%',
        height:70,
        borderRadius:30,
        justifyContent:'center',
    },
    text:{
        color:'#FFF',
        fontFamily:'Montserrat_600SemiBold',
        fontSize:11
    },
    duration:{
        color:'#FFF',
        fontSize:12,
        flex:1,
        right:'5%',
        position:'absolute',
        fontFamily:'Montserrat_600SemiBold'
    },
    username:{
        color:'#FFF',
        fontFamily:'Montserrat_700Bold',
        fontSize:20
    },
    fondo:{
        backgroundColor:'rgba(59, 59, 59, 0.3)',
        height:'100%',
        justifyContent:'center'
    }
})
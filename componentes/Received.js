import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';


const Received = ({image, message}) => {
    return(
        <View style={styles.container}>
          <View>
               <Text style={styles.message}>{message}</Text>
               <Text style={styles.duration}>12:13 AM</Text>
          </View>
        </View>
    )
}
export default Received;
const styles = StyleSheet.create({
    duration:{
        color:'#ce7329',
        fontSize:11,
        marginHorizontal:15,
        marginTop:5,
        fontFamily:'Montserrat_600SemiBold',
    },
    container:{
        flexDirection:'row',
        marginTop:20,
        width:250,
        marginLeft:'3%',
    },
    img:{
        width:40,
        height:40,
        borderRadius:20
    },
    message:{
        fontSize:13,
        marginHorizontal:15,
        fontFamily:'Montserrat_700Bold',
        color:'#FFF'
    }
})
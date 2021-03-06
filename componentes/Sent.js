import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Sent = ({message}) => {
    var today = new Date()
    return(
        <View style={styles.container}>
            <LinearGradient
                colors={['#ce7329', '#b26120']}
                style={styles.gradient}
            >
                <Text style={styles.text}>{message}</Text>
            </LinearGradient>
            <Text style={styles.duration}>{today.getHours()  + ':' + today.getMinutes()}</Text>
        </View>
    )
}
export default Sent;

const styles = StyleSheet.create({
    container:{
        marginVertical:5,
        alignSelf:'flex-end',
    },
    duration:{
        color:'#b6b6b6',
        fontSize:11,
        marginTop:5,
        fontFamily:'Montserrat_600SemiBold',
        alignSelf:'flex-end',
        
        marginRight:'3%'
    },
    gradient:{
        maxWidth:220,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20,
        paddingVertical:10,
        marginRight:'2%',
        borderRadius:15
    },
    text:{
        color:'#fff',
        fontFamily:'Montserrat_700Bold'
    }
})
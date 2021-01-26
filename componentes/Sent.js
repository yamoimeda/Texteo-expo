import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Sent = ({message}) => {
    return(
        <View style={styles.container}>
            <LinearGradient
                colors={['#ce7329', '#b26120']}
                style={styles.gradient}
            >
                <Text style={styles.text}>{message}</Text>
            </LinearGradient>
            <Text style={styles.duration}>12:34 AM</Text>
        </View>
    )
}
export default Sent;

const styles = StyleSheet.create({
    container:{
        marginVertical:25,
        alignSelf:'flex-end'
    },
    duration:{
        color:'#b6b6b6',
        fontSize:11,
        marginTop:5,
        fontFamily:'Montserrat_600SemiBold',
        alignSelf:'flex-end'
    },
    gradient:{
        maxWidth:220,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20,
        paddingVertical:10,
        marginRight:'3%',
        borderRadius:15
    },
    text:{
        color:'#fff',
        fontFamily:'Montserrat_700Bold'
    }
})
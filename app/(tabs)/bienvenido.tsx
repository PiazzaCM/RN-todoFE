import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function Bienvenido() {
    return (
        <View style={styles.container}>
            
            <Image source={require('@/assets/images/hola.gif')} />
        
            <Text style={styles.text}>Bienvenidos a mi app</Text>

            <TouchableHighlight onPress={() => router.replace('/home')} style={styles.button}>
                <Text style={{color: 'white'}}>Ingresar</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    text: {
        fontSize: 25,
        fontWeight: '500'  
    },
    button: {
        backgroundColor: '#FF4566',
        height: 50,
        width: 200,
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 50
      }

})
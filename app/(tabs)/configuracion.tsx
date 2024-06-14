import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function Configuracion() {
    return (
        <View style={styles.main}>
            <TouchableHighlight style={styles.button}><Text style={{color: 'white'}}>Modo Oscuro</Text></TouchableHighlight>
            <TouchableHighlight style={styles.button}><Text style={{color: 'white'}}>Cambiar Idioma</Text></TouchableHighlight>
            <TouchableHighlight style={styles.button}><Text style={{color: 'white'}} onPress={()=> router.replace('/')}>Cerrar Sesión</Text></TouchableHighlight>
        </View>
    );
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'pink',
        paddingTop: 15,
        display: 'flex',
        alignItems: 'center',
        gap: 10
    },
    button: {
        backgroundColor: '#FF4566',
        height: 50,
        width: 490,
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10
      }
    
})
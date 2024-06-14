import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Modal, PaperProvider, Portal } from 'react-native-paper';

export default function HomeScreen() {

  const [data, setData] = useState({username: '', password: ''});
  const [open, setOpen] = useState(false);
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])[A-Za-z\d\W_]{5,}$/;


  const login = ()=>{
    if((data.username.trim().length >= 5 && data.username.trim().length <= 10) && regex.test(data.password)){
      router.replace('/bienvenido');
    } else {
      setOpen(true);
    }
  }


  useEffect(()=>{
    console.log(data)
  },[data])

  return (
    <PaperProvider>
      <View style={styles.main}>
        <View style={styles.imageContainer}>
          <Image source={require('@/assets/images/cinna.webp')} />
          <Text style={styles.loginTitle}>Inicio de Sesión</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput placeholder='Username' style={styles.input} value={data.username} onChangeText={(username) => setData({ ...data, username })} />
          <TextInput placeholder='Password' secureTextEntry={true} style={styles.input} value={data.password} onChangeText={(password) => setData({ ...data, password })} />
          <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={login}>
            <Text style={{ color: 'white' }} >Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Portal>
        <Modal visible={open} onDismiss={() => setOpen(false)} style={styles.modal} contentContainerStyle={styles.modalContainer}>

            <Image source={require('@/assets/images/error.png')}/>

            <Text style={styles.modalTitle}>¡Vaya! Parece que el usuario o la contraseña no son correctas.</Text>

        </Modal>
      </Portal>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 350
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25
  },
  loginTitle: {
    fontSize: 30,
    fontWeight: '600'
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    width: 350,
    borderRadius: 10,
    paddingLeft: 20,
    //@ts-ignore
    outlineWidth: 0
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
});

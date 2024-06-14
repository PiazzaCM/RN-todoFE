import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Modal, PaperProvider, Portal } from "react-native-paper";
//@ts-ignore
import tareaAgreada from '@/assets/images/tareaAgregada.webp';
//@ts-ignore
import errorAlGuardar from '@/assets/images/errorAlGuardar.png';

interface Tarea {
    id?: string;
    titulo: string;
    autor: string;
    descripcion: string;
    fecha: string
}

export default function NuevaTarea() {

    const {id} = useLocalSearchParams();
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState<Tarea>({
        titulo: '', autor: '', descripcion: '', fecha: ''
    });

    const fetchTareas = async ()=>{
        const data =  await fetch('../../assets/JSON/data.json');

        const res = await data.json();

        setData(res.find( (tarea: Tarea) => tarea.id === id));
    }

    const guardarTarea = ()=>{
        if(data.titulo.trim().length && data.autor.trim().length && data.descripcion.trim().length && data.fecha.trim().length){
            setError(false);
            setOpen(true);

            setTimeout(() => {
                router.replace('/home')
                setOpen(false);
            }, 1200);
        } else {
            setError(true);
            setOpen(true)
        }
    }
    

    useEffect(()=>{
        fetchTareas()
    },[])

    return (
        <PaperProvider>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image source={require('@/assets/images/nuevaTarea.png')} />
                    <Text style={{ fontSize: 20, fontWeight: '500' }}> ¡Edita una tarea!</Text>
                </View>

                <TextInput value={data.titulo} style={styles.input} placeholder="Titulo" onChangeText={(titulo)=>setData({...data, titulo})}/>

                <TextInput value={data.autor} style={styles.input} placeholder="Autor" onChangeText={(autor)=>setData({...data, autor})}/>

                <TextInput value={data.descripcion} style={{...styles.input}} placeholder="descripcion" onChangeText={(descripcion)=>setData({...data, descripcion})}/>

                <TextInput value={data.fecha} style={styles.input} placeholder="Fecha" onChangeText={(fecha)=>setData({...data, fecha})}/>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={() => guardarTarea()}
                >
                    <Text style={{ color: 'white' }}>Actualizar tarea</Text>
                </TouchableOpacity>
            </View>
            <Portal>
                <Modal 
                    visible={open}
                    style={styles.modal} 
                    contentContainerStyle={styles.modalContainer}
                    onDismiss={()=>setOpen(false)}
                >
                    <Image source={error ? errorAlGuardar: tareaAgreada}/>

                    <Text style={{fontSize: 22, fontWeight: 500, textAlign: 'center'}}>
                        {error ? '¡Debes completar todos los campos para guardar una tarea!' : '¡Tarea actualizada con exito!'}
                    </Text>
                </Modal> 
            </Portal>
        </PaperProvider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        backgroundColor: 'pink'
    },
    headerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 50,
        width: 350,
        paddingLeft: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        //@ts-ignore
        outlineWidth: 0
    },
    button: {
        backgroundColor: '#FF4566',
        height: 50,
        width: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
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
        width: 400,
        backgroundColor: 'white',
        borderRadius: 10,
    },
})
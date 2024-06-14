import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Animated, FlatList, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Tareas {
    id: string;
    titulo: string;
    autor: string;
    descripcion: string;
    fecha: string
}


export default function HomePage() {

    const [tareas, setTareas] = useState<Tareas[]>([]);
    const [edit, setEdit] = useState('');

    const fetchTareas = async ()=>{
        const data =  await fetch('../../assets/JSON/data.json');

        const res = await data.json();

        setTareas(res);
    }

    useEffect(()=>{
        fetchTareas()
    },[])


    return (
        <View style={styles.container}>
            <FlatList data={tareas} renderItem={({item}) => (
                <TouchableOpacity 
                    activeOpacity={0.5} 
                    style={{...styles.card, opacity: edit === item.id ? 0.7 : 1}}
                    onPress={()=> router.push(`/tarea/${item.id}`)}
                    onLongPress={()=> setEdit(edit === item.id ? '' : item.id)}    
                    key={item.id}
                >
                    <View>
                        <Text style={styles.titulo}>{item.titulo}</Text>
                        <Text style={styles.subtitulo}>{item.autor}</Text>
                        <Text style={{color: 'white'}}>{item.descripcion}</Text>
                        <Text style={{color: 'white'}}>{item.fecha}</Text>
                    </View>
                </TouchableOpacity>
            )}/>

            <View style={styles.nuevaTarea} >
                <TouchableOpacity
                    activeOpacity={0.1} 
                    onPress={()=> router.push(edit ? `/editarTarea/${edit}` : '/nuevaTarea')}
                >
                    <Text style={{color: 'white', textAlign: 'center', fontSize: 17}}>{edit ? 'Editar' : 'Nueva'}</Text>
                </TouchableOpacity>
            </View>
           
            <View style={styles.configuracion} >
                <TouchableOpacity
                    activeOpacity={0.1} 
                    onPress={()=> router.push('/configuracion')}
                >
                    <Text style={{color: 'white', textAlign: 'center', fontSize: 17}}>Config</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: "relative"
    },
    card: {
        backgroundColor: '#c13fb7',
        padding: 20,
        borderRadius: 10,
        margin: 10
    },
    titulo: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white'
    },
    subtitulo: {
        fontSize: 17,
        fontWeight: '400',
        color: 'white'
    },
    nuevaTarea: {
        position: "absolute",
        backgroundColor: '#FF4566',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 50,
        bottom: 25,
        right: 30
    },
    configuracion: {
        position: "absolute",
        backgroundColor: '#FF4566',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 50,
        bottom: 25,
        right: 95
    }
})
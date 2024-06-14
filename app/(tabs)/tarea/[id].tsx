import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface Tarea {
    id: string;
    titulo: string;
    autor: string;
    descripcion: string;
    fecha: string
}

export default function MiTarea() {

    const { id } = useLocalSearchParams();

    const [tarea, setTarea] = useState<Tarea>({
        id: '', titulo: '', autor: '', descripcion: '', fecha: ''
    });


    const fetchTareas = async ()=>{
        const data =  await fetch('../../assets/JSON/data.json');

        const res = await data.json();

        setTarea(res.find( (tarea: Tarea) => tarea.id === id));
    }

    useEffect(()=>{
        fetchTareas()
    },[])

    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/tarea.png')}/>
            <View style={styles.infoContainer}>
                <Text style={styles.titulo}>{tarea.titulo}</Text>
                <Text style={styles.subtitulo}>{tarea.autor}</Text>
                <Text>{tarea.descripcion}</Text>
                <Text>{tarea.fecha}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        backgroundColor: 'pink'
    },
    infoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        padding:20,
        width: 400,
        borderRadius: 15
    },
    titulo: {
        fontSize: 20,
        fontWeight: '500',
        color: '#ad2ba4'
    },
    subtitulo: {
        fontSize: 17,
        fontWeight: '400',
        marginBottom: 10
    }
})
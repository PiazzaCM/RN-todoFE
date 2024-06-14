import { Stack } from "expo-router";

export default function TabLayout() {
  
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="bienvenido" options={{headerShown: false}}/>
      <Stack.Screen name="home"  options={{headerShown: true, title: 'Lista de Tareas', headerTintColor: 'white', headerStyle: {backgroundColor: '#c13fb7'}}}/>
      <Stack.Screen name="configuracion"  options={{headerShown: true, title: 'Configuración de la App', headerTintColor: 'white', headerStyle: {backgroundColor: '#c13fb7'}}}/>
      <Stack.Screen name="nuevaTarea"  options={{headerShown: true, title: 'Nueva Tarea', headerTintColor: 'white', headerStyle: {backgroundColor: '#c13fb7'}}}/>
      <Stack.Screen name="tarea/[id]"  options={{headerShown: true, title: 'Mi Tarea', headerTintColor: 'white', headerStyle: {backgroundColor: '#c13fb7'}}}/>
      <Stack.Screen name="editarTarea/[id]"  options={{headerShown: true, title: 'Editar Tarea', headerTintColor: 'white', headerStyle: {backgroundColor: '#c13fb7'}}}/>
    </Stack>
  );
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text fontFamily= "arial" fontSize="30" color="#ffff">Tienda Virtual</Text>
      <Image source={{uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftecnosoluciones.com%2Fque-productos-vender-en-una-tienda-virtual-o-comercio-electronico%2F&psig=AOvVaw18UPctdLeAR3JrH-zbH91q&ust=1693969415882000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMiXuP29koEDFQAAAAAdAAAAABAE"}} width={400} height={500}></Image>
      <Button title="Comprar" color="#f194ff"></Button>
      <Button title="Deshacer" color="#f194ff"></Button>
      <TextInput value='number' text="Cantidad producto"></TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

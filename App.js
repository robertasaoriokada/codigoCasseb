import { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import Registro from "./src/registro";

export default function App() {
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [numero, setNumero] =useState();
  const [ficha, setFicha] = useState();

  const mostrarRegistro = (params) => {
    var aux = "";
    let registro = new Registro(nome, idade, numero);
    aux += registro.nome + "\n";
    aux += registro.username + "\n";
    aux += registro.numero + "\n";
    aux += registro.email + "\n";
    setFicha(aux);
  }
  return (
    <View style={styles.container}>
      <Text>Nome</Text>
      <TextInput style={styles.campo} onChangeText={(nome) => setNome(nome)}></TextInput>
      <Text>Idade</Text>
      <TextInput style={styles.campo} onChangeText={(idade) => setIdade(idade)}></TextInput>
      <Text>Número</Text>
      <TextInput style={styles.campo} onChangeText={(numero) => setNumero(numero)}></TextInput>
      <br></br>
      <Button title="Registro" onPress={mostrarRegistro}></Button>
      <br></br>
      <Text>{ficha}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  campo: {
    borderWidth: 1,
    borderColor: "red",
  },
});

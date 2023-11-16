import { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import Registro from "./model/registro";

export default function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [contato, setContato] = useState("");
  const [ficha, setFicha] = useState("");

  function montar_ficha(params) {
    var aux = "";
    let isaac = new Registro(nome, idade, contato);

    aux += "Nome: " + isaac.nome + "\n";
    aux += "Idad: " + isaac.idade + "\n";
    aux += "Contato: " + isaac.contato + "\n";
    aux += "Email: " + isaac.email;

    setFicha(aux);
  }

  return (
    <View style={styles.container}>
      <Text>Nome</Text>
      <TextInput
        onChangeText={(value) => setNome(value)}
        style={styles.campo}
      />
      <Text>idade</Text>
      <TextInput
        onChangeText={(value) => setIdade(value)}
        style={styles.campo}
      />
      <Text>contato</Text>
      <TextInput
        onChangeText={(value) => setContato(value)}
        style={styles.campo}
      />
      <Button onPress={montar_ficha} title="registrar" />
      <Text>FICHA</Text>
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

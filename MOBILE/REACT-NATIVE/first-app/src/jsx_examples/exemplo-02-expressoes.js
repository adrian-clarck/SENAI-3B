// ============================================
// Arquivo Base
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function Exemplo02() {
  const nome = "Maria";
  const idade = 20;
  const preco = 48.0;

  const usuario = {
    nome: "ana",
    cidade: "salto",
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>1.Variáveis</Text>
      <Text style={styles.subtitulo}>Variáveis comuns</Text>
      <View style={styles.exemplo}>
        {" "}
        //exemplo
        <Text>Nome: {nome.toUpperCase()}</Text>
        <Text>idade: {idade}</Text>
        <Text>Preço: {preco * 2}</Text>
      </View>
      <View style={styles.exemplo}>
        <Text>Nome: {usuario.nome}</Text>
        <Text>Cidade: {usuario.cidade}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a900b9",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});

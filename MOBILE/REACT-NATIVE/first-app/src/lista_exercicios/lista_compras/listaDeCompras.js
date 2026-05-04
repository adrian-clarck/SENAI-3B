import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Alert,
  StyleSheet,
} from "react-native";

export default function ListaDeCompras() {
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [lista, setLista] = useState([]);

  function adicionarItem() {
    // Validações (Exercício 2 e 3)
    if (!produto.trim()) {
      Alert.alert("Erro", "Digite o nome do produto antes de adicionar.");
      return;
    }

    if (!quantidade.trim()) {
      Alert.alert("Erro", "Digite a quantidade do produto.");
      return;
    }

    const novoItem = {
      id: Date.now().toString(),
      nome: produto,
      quantidade: quantidade,
    };

    setLista((prev) => [...prev, novoItem]);

    // Limpar campos
    setProduto("");
    setQuantidade("");
  }

  function renderItem({ item }) {
    return (
      <View style={styles.card}>
        <Text style={styles.texto}>
          {item.quantidade}x {item.nome}
        </Text>
      </View>
    );
  }

  function limparLista() {
    setLista([])
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome do produto"
        value={produto}
        onChangeText={setProduto}
        style={styles.input}
      />

      <TextInput
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
        style={styles.input}
      />

      <Button title="Adicionar" onPress={adicionarItem} />

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Sua lista está vazia. Adicione um produto!
          </Text>
        }
      />
      
        <Button title="Limpar lista" onPress={limparLista} color="red" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    elevation: 2,
  },
  texto: {
    fontWeight: "bold",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    color: "gray",
  },
});

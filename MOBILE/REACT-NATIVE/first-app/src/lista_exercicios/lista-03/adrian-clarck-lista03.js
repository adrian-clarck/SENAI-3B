import { View, Text, ScrollView, StyleSheet } from "react-native";
export default function Lista03() {
  const frutas = ["Banana", "Ameixa", "Jamelão"];
  const produtos = [
    { id: 1, nome: "Camiseta", preco: 49.9 },
    { id: 2, nome: "Calça", preco: 89.9 },
    { id: 3, nome: "Tênis", preco: 199.9 },
  ];
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Lista 03 - Adrian Clarck</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Exercício 1 - Lista de Frutas</Text>
        {frutas.map((fruta, index) => (
          <Text key={index}>
            {index + 1} - {fruta}
          </Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 2 - Lista de Produtos</Text>
        {produtos.map((produtos) => (
          <Text key={produtos.id}>
            {produtos.nome} - {produtos.preco}
          </Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 3 - Filtrar Números Pares</Text>
        {numeros
          .filter((numeros) => numeros % 2 == 0)
          .map((numeros) => (
            <Text key={numeros}>{numeros}</Text>
          ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 60,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#212121",
  },

  card: {
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 8,
  },
  texto: {
    fontSize: 14,
    color: "#424242",
    lineHeight: 22,
  },
});

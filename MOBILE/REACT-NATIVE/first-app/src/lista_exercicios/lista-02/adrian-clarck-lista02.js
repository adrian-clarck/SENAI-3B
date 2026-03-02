import { View, Text, ScrollView, StyleSheet } from "react-native";
export default function Lista02() {
  const loja_aberta = true;
  const tem_promocao = true;
  const nota = 7.5;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Lista 02 - Adrian Clarck</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Exercício 1 - Operador Ternário</Text>
        <Text style={styles.texto}>
          Status: {loja_aberta ? "Aberta" : "Fechada"}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 2 - Operador &&</Text>
        <Text style={styles.texto}>
          {tem_promocao && "Promoção ativa! Aproveite os descontos"}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>
          Exercício 3 - Condicional com Múltiplas Condições
        </Text>
        <Text style={styles.texto}>
          {nota >= 7 ? (
            <Text style={{ color: "#008000" }}>Aprovado</Text>
          ) : nota >= 5 ? (
            <Text style={{ color: "#F9A800" }}>Recuperação</Text>
          ) : (
            <Text style={{ color: "#FF0000" }}>Reprovado</Text>
          )}
        </Text>
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

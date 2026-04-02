import { View, Text, StyleSheet } from "react-native";

export default function Avaliacao02() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício - 02</Text>
      <View style={styles.exemplo}>
        <View style={styles.header}></View>
        <View style={styles.corpo}>
          <View style={styles.sidebar}></View>
          <View style={styles.areaCentral}>
            <View style={styles.secaoSuperior}>
              <View
                style={{ flex: 1, backgroundColor: "green", borderRadius: 8 }}
              ></View>
              <View
                style={{ flex: 1, backgroundColor: "blue", borderRadius: 8 }}
              ></View>
            </View>
            <View style={styles.secaoCircular}></View>
            <View style={styles.secaoInferior}>
              <View
                style={{ flex: 1, backgroundColor: "red", borderRadius: 8 }}
              ></View>
              <View
                style={{ flex: 2, backgroundColor: "orange", borderRadius: 8 }}
              ></View>
              <View
                style={{ flex: 1, backgroundColor: "purple", borderRadius: 8 }}
              ></View>
            </View>
          </View>
        </View>
        <View style={styles.footer}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
    gap: 8,
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  exemplo: {
    flex: 1,
    padding: 8,
    gap: 8,
    backgroundColor: "#1a1a1a",
    borderRadius: 8,
  },
  header: {
    height: 60,
    backgroundColor: "#2c3e50",
    flexDirection: "row",
    gap: 8,
    borderRadius: 8,
  },
  corpo: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },
  sidebar: {
    width: 80,
    backgroundColor: "#95a5a6",
    flexDirection: "row",
    gap: 8,
    borderRadius: 8,
  },
  areaCentral: {
    flex: 1,
    gap: 8,
    flexDirection: "column",
  },
  secaoSuperior: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },
  secaoCircular: {
    width: 50,
    height: 50,
    borderRadius: 25,
    gap: 8,
    backgroundColor: "#34495e",
    alignSelf: "center",
  },
  secaoInferior: {
    flex: 1,
    gap: 8,
    flexDirection: "row",
  },
  footer: {
    height: 50,
    borderRadius: 8,
    backgroundColor: "#2c3e50",
  },
});

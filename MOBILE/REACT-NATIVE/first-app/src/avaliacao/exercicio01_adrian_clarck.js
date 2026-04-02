import { View, Text, StyleSheet } from "react-native";

export default function Avaliacao01() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício - 01</Text>
      <View style={styles.exemplo}>
        <View style={styles.header}>
          <View
            style={{
              height: 100,
              backgroundColor: "yellow",
              flex: 1,
              borderRadius: 5,
            }}
          ></View>
          <View
            style={{
              height: 100,
              backgroundColor: "blue",
              flex: 3,
              borderRadius: 5,
            }}
          ></View>
        </View>

        <View style={styles.areaCentral}>
          <View
            style={{ backgroundColor: "green", flex: 1, borderRadius: 5 }}
          ></View>
          <View style={styles.areaCentralDireita}>
            <View
              style={{ backgroundColor: "pink", flex: 1, borderRadius: 5 }}
            ></View>
            <View
              style={{ backgroundColor: "orange", flex: 1, borderRadius: 5 }}
            ></View>
          </View>
        </View>

        <View style={styles.footer}>
          <View
            style={{
              height: 90,
              backgroundColor: "red",
              flex: 1,
              borderRadius: 5,
            }}
          ></View>
          <View
            style={{
              height: 90,
              backgroundColor: "teal",
              flex: 1,
              borderRadius: 5,
            }}
          ></View>
          <View
            style={{
              height: 90,
              backgroundColor: "purple",
              flex: 1,
              borderRadius: 5,
            }}
          ></View>
        </View>
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
    height: 100,
    padding: 16,
    marginBottom: 16,
    gap: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  header: {
    flexDirection: "row",
    gap: 8,
  },
  areaCentral: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },
  areaCentralDireita: {
    flex: 1,
    gap: 8,
    flexDirection: "column",
  },
  footer: {
    flexDirection: "row",
    height: 90,
    gap: 8,
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ViewExample from "./basic_components/view_examples01";
import ViewExample02 from "./basic_components/view_examples02";
import ExercicioView01 from "./lista_exercicios_praticos/exercicios-praticos";
import Avaliacao01 from "./avaliacao/exercicio01_adrian_clarck";
import Avaliacao02 from "./avaliacao/exercicio02_adrian_clarck";

export default function App() {
  return (
    <View style={styles.container}>
      <Avaliacao02 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",

    justifyContent: "center",
  },
});

import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView09() {
    return (
        <View style={styles.container}>
            <View style={styles.blackBox}>
                <View style={[styles.circle, {backgroundColor: "red"}]}></View>
                <View style={[styles.circle, {backgroundColor: "yellow"}]}></View>
                <View style={[styles.circle, {backgroundColor: "green", borderRadius: 40}]}></View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  blackBox:{
    flexDirection: "column",
    backgroundColor: "black",
    height: 300,
    width: 150,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  circle:{
    height: 60,
    width: 60,
    borderRadius: 40,
  }
});
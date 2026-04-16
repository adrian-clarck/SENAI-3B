import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView10() {
    return (
        <View style={styles.container}>

            <View style={[styles.header, styles.box]}></View>

            <View style={styles.topRow}>
                <View style={[styles.card, styles.box, {backgroundColor: "red"}]}></View>
                <View style={[styles.card, styles.box, {backgroundColor: "blue"}]}></View>
                <View style={[styles.card, styles.box, {backgroundColor: "yellow"}]}></View>
            </View>

            <View style={styles.content}>
                <View style={[styles.mainContent, styles.box]}></View>
                <View style={[styles.sideBar, styles.box]}></View>
            </View>

            <View style={[styles.footer, styles.box]}></View>
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  box:{
    padding: 8,
    borderRadius: 10,
  },
  header:{
    height: 50,
    backgroundColor: "green",
  },
  topRow:{
    flexDirection: "row",
    gap: 8,
  },
  card:{
    flex: 1,
    aspectRatio: 1,
  },
  content:{
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },
  mainContent:{
    flex: 2,
    backgroundColor: "pink",
  },
  sideBar:{
    flex: 1,
    backgroundColor: "grey",
  },
  footer:{
    height:40,
    backgroundColor: "blue",
  }
})
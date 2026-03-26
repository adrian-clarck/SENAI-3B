import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView01() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.titulo}>Exercício 1 — Coluna de Três Caixas</Text>
      <View style={styles.exemplo}>
        <View style={{ flexDirection: "column", gap: 12 }}>
          <View style={styles.redBox}></View>
          <View style={styles.blueBox}></View>
          <View style={styles.greenBox}></View>
        </View>
      </View>

      <Text style={styles.titulo}>Exercício 2 — Três Caixas em Linha</Text>
      <View style={styles.exemplo}>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <View style={styles.redBox}></View>
          <View style={styles.blueBox}></View>
          <View style={styles.greenBox}></View>
        </View>
      </View>

      <Text style={styles.titulo}>
        Exercício 3 — Espaçamento com space-between
      </Text>
      <View style={styles.exemplo}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", width: 350 }}>
          <View style={[styles.redBox, { height: 70, width: 70 }]}></View>
          <View style={[styles.blueBox, { height: 70, width: 70 }]}></View>
          <View style={[styles.greenBox, { height: 70, width: 70 }]}></View>
        </View>
      </View>

       <Text style={styles.titulo}>
        Exercício 4 — Caixa Centralizada
      </Text>
      <View style={styles.exemplo}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
          <View style={{ height: 120, width: 120, backgroundColor: "#F9A800" }}></View>
        </View>
      </View> */}

      {/*  <Text style={styles.titulo}>Exercício 5 — Layout de Duas Colunas</Text>
      <View style={styles.exemplo}>
        <View style={{ flex: 1, flexDirection: "row", gap: 8, maxHeight: 500 }}>
          <View
            style={{ height: "100%", width: 200, backgroundColor: "#0c00f9" }}
          ></View>
          <View
            style={{ height: "100%", width: 200, backgroundColor: "#0e9917" }}
          ></View>
        </View>
      </View> */}

      {/* <Text style={styles.titulo}>Exercício 6 — Header, Conteúdo e Footer</Text>
      <View style={styles.exemplo}>
        <View style={{ height: 60, width: "100%", backgroundColor: "#05910e" }}>
          <Text style={styles.textStyle}>Header</Text>
        </View>

        <View
          style={{
            flex: 1,
            width: "100%",
            backgroundColor: "#727272",
          }}
        >
          <Text style={styles.textStyle}>Conteúdo</Text>
        </View>

        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#223cff",
          }}
        >
          <Text style={styles.textStyle}>Footer</Text>
        </View>
      </View> */}

      {/* <Text style={styles.titulo}>Exercício 7 — Grid 2x2</Text>
      <View style={styles.exemplo}>
        <View style={{ flex: 1, padding: 20, gap: 10 }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <View
              style={{ flex: 1, backgroundColor: "#05910e", height: 450 }}
            ></View>
            <View
              style={{ flex: 1, backgroundColor: "red", height: 450 }}
            ></View>
          </View>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <View
              style={{ flex: 1, backgroundColor: "#4d21ff", height: 450 }}
            ></View>
            <View
              style={{ flex: 1, backgroundColor: "#F9A800", height: 450 }}
            ></View>
          </View>
        </View>
      </View> */}

      {/* <Text style={styles.titulo}>Exercício 8 — Sidebar com Área de Conteúdo</Text>
      <View style={styles.exemplo}>
        <View style={{ }}>
         
        </View>
      </View> */}

      <Text style={styles.titulo}>Exercício 9 — Semáforo</Text>
      <View style={styles.exemplo}>
        <View style={{ flexDirection: "column", padding: 10 }}>
          <View style={[styles.blackBox]}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  exemplo: {
    flex: 1,
    width: "100%",
  },
  redBox: {
    height: 80,
    width: 80,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 80,
    width: 80,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 80,
    width: 80,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  blackBox: {
    height: 200,
    width: 120,
    backgroundColor: "black",
    alignContent: "center",
    justifyContent: "center",
  },
});

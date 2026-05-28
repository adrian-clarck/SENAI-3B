import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
/* import ViewExample from "./basic_components/view_examples01";
import ViewExample02 from "./basic_components/view_examples02";
import ExercicioView01 from "./lista_exercicios_praticos/exercicios-praticos";
import Avaliacao01 from "./avaliacao/exercicio01_adrian_clarck";
import Avaliacao02 from "./avaliacao/exercicio02_adrian_clarck";
import CartaoPerfil from "./basic_components/props/exemploProp";
import CardProduto from "./basic_components/props/Exercícios/exercícios01";
import CartaoUsuario from "./basic_components/props/Exercícios/exercícios01";
import Saudacao from "./basic_components/props/Exercícios/exercícios01";
import PerfilAluno from "./basic_components/props/Exercícios/exercícios01";
import Botao from "./basic_components/props/Exercícios/exercícios01"; */
/* import ContadorExample from "./hooks/useState_example"; */
/* import TelaDeLogin from "./hooks/useRef_example";
import TelaMoeda from "./hooks/useEffect_example"; */
/* import TelaRecados from "./hooks/Exercicios/componenteRecados";
import ListaDeCompras from "./lista_exercicios/lista_compras/listaDeCompras";
import FormularioExemplos from "./text_input/formulario"; */
import StackNavigator from "./navigation/exemplos/stack_navigator";
import BottomTabNavigator from "./navigation/exemplos/bottom_tab_navigator";
import DrawerNavigator from "./navigation/exemplos/drawer_navigator";

export default function App() {
  return (
  <NavigationContainer>
    <DrawerNavigator/>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",

    justifyContent: "center",
  },
});

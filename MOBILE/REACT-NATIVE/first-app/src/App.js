import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo01 from './jsx_examples/exemplo-01-estrutura';
import Exemplo02 from './jsx_examples/exemplo-02-expressoes';
import Exemplo03 from './jsx_examples/exemplo-03-condicionais';
import Exemplo04 from './jsx_examples/exemplo-04-listas';
import Lista01 from './lista_exercicios/lista-01/adrian-clarck-lista01';
import Lista02 from './lista_exercicios/lista-02/adrian-clarck-lista02';
import Lista03 from './lista_exercicios/lista-03/adrian-clarck-lista03';


export default function App() {
  return (
    <View style={styles.container}>
      <Lista03 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
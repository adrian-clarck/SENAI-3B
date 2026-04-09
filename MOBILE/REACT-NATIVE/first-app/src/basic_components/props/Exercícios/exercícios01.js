import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

/* 01
 export default function CardProduto(props) {
  return (
    <View>
        <Text>Produto: {props.produto}</Text>
        <Text>Preço: R$ {props.preco}</Text>
    </View>
  )
} */

/* 02
 export default function CartaoUsuario({ nome, email }) {
  return (
    <Text>
      {nome} - {email}
    </Text>
  );
} */

/* 03
export default function Saudacao(props) {
    return (
        <View>
            <Text>Olá, {props.nome}! Bem-vindo(a)</Text>
        </View>
    )
} */

/* 04
 export default function PerfilAluno(props) {
  return (
    <View>
        <Text>Nome: {props.nome}</Text>
        <Text>Turma: {props.turma}</Text>
        <Text>Martrícula: {props.matricula}</Text>
    </View>
  )
}  */

export default function Botao({ titulo }) {
  return (
    <TouchableOpacity>
      <Text>{titulo}</Text>
    </TouchableOpacity>
  );
}

import React, { useState } from "react";
import { Alert } from "react-native";

export default function FormularioExemplos() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  const [tarefa, setTarefa] = useState("");
  const [prioridade, setPrioridade] = useState("");

  function handleEnviar() {
    console.log("Nome", nome, "Idade:", idade)
    setNome("")
    setIdade("")
  }

  function handleAdicionar() {
    if (tarefa.trim() === '') {
        Alert.alert("Atenção")
  
import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Platform, StatusBar, useColorScheme } from "react-native";
import Task from "./components/Task";

export default function HomeScreen() {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  // Usa o hook `useColorScheme` para detectar o tema do sistema
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  // Oculta a StatusBar e ajusta o estilo conforme o tema
  StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
  StatusBar.setBackgroundColor(isDarkMode ? "#000" : "#fff");

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task) {
      setTaskItems([...taskItems, { text: task, completed: false }]);
      setTask("");
    }
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy[index].completed = !itemsCopy[index].completed;
    setTaskItems(itemsCopy);
  };

  // Função para remover uma tarefa
  const removeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={[styles.sectionTitle, { color: isDarkMode ? '#fff' : '#000' }]}>Meu dia</Text>
        <Text style={[styles.sectionTime, { color: isDarkMode ? '#fff' : '#000' }]}>
          {new Date().toLocaleDateString("pt-PT", { weekday: 'long', day: 'numeric', month: 'long' })}
        </Text>

        <View style={styles.items}>
          {taskItems.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              onPress={() => completeTask(index)}
              onLongPress={() => removeTask(index)} // Remover tarefa ao pressionar por um longo tempo
            >
              <Task text={item.text} completed={item.completed} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput 
          style={[styles.input, { backgroundColor: isDarkMode ? "#333" : "#fff", color: isDarkMode ? "#fff" : "#000" }]}
          placeholder={'Adicionar uma tarefa'} 
          placeholderTextColor={isDarkMode ? "#aaa" : "#666"}
          value={task} 
          onChangeText={text => setTask(text)} 
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkContainer: {
    backgroundColor: "#262424",
  },
  lightContainer: {
    backgroundColor: "#f9f9f9",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 35,
    paddingTop: 5,
    fontWeight: "bold",
  },
  sectionTime: {
    fontSize: 18,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: '3%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: '65%',
    fontSize: 17,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 40,
    textAlign: 'center',
  },
});

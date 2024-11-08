import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Platform } from "react-native";
import Task from "./components/Task";

export default function HomeScreen() {

  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task) {
      setTaskItems([...taskItems, { text: task, completed: false }]);
      setTask("");
    }
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy[index].completed = !itemsCopy[index].completed; // Alterna o estado "concluído"
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Meu dia</Text>
      <Text style={styles.sectionTime}>quinta-feira, 7 de novembro</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task 
                  text={item.text} 
                  completed={item.completed} // Passa o estado "concluído" como uma prop
                />
              </TouchableOpacity>
            ))
          }
        </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput 
          style={styles.input} 
          placeholder={'Adicionar uma tarefa'} 
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
    backgroundColor: "#262424",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 35,
    color: '#fff',
    paddingTop: 5,
    fontWeight: "bold",
  },
  sectionTime: {
    fontSize: 18,
    color: '#fff',
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
    // backgroundColor: '#fff',
    color: '#fff',
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   tasksWrapper: {
//     paddingTop: 80,
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   items: {
//     marginTop: 30,
//   },
//   writeTaskWrapper: {
//     position: 'absolute',
//     bottom: 60,
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   input: {
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     backgroundColor: '#fff',
//     borderRadius: 60,
//     borderColor: '#C0C0C0',
//     borderWidth: 1,
//     width: 250,
//   },
//   addWrapper: {
//     width: 60,
//     height: 60,
//     backgroundColor: '#FFF',
//     borderRadius: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderColor: '#C0C0C0',
//     borderWidth: 1,
//   },
//   addText: {},
// });

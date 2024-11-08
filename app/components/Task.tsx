// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// const Task = (props) => {
//   return (
//     <View style={styles.item}>
//       <View style={styles.itemLeft}>
//       <View style={styles.circular}></View>
//         <Text style={styles.itemText}>{props.text}</Text>
//       </View>

//     </View>
//   );
// };

// const styles = StyleSheet.create({

//     item: {
//         backgroundColor: '#6E6E6E',
//         padding: 15,
//         borderRadius:10,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         marginBottom: 20,

//     },

//     itemLeft: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         flexWrap: 'wrap',

//     },

//     itemText: {
//         maxWidth: '80%',
//         fontSize: 18,
//         color: '#fff',

//     },

//     circular: {
//         width: 20,
//         height: 20,
//         borderColor: '#ffff',
//         borderWidth: 2,
//         borderRadius: 10,
//         marginRight: 15,
//     },
// });

// export default Task;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Task({ text, completed }) {
  return (
    <View style={[styles.task, completed && styles.taskBgCompleted]}>
    <View style={styles.circular}></View>

      <Text style={[styles.taskText, completed && styles.taskTextCompleted]}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#686565',
    marginBottom: 10,
  },
  taskText: {
    fontSize: 18,
    color: '#fff',  
  },
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#A9A9A9',  // Cor mais clara para indicar que está riscado
  },
  

  taskBgCompleted: {
    backgroundColor: '#363636',
  },
});

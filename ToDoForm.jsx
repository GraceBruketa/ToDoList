import React, { useState } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState("")

  const handleAddTask = () => {
    if (taskText.trim()) {
      addTask(taskText)
      setTaskText("") // Clear the input after adding
    }
  }

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter a new task"
        value={taskText}
        onChangeText={setTaskText}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  input: {
    flex: 1,
    borderColor: "#ddd",
    borderWidth: 1,
    padding: 8,
    marginRight: 8,
    borderRadius: 4,
  },
})

export default ToDoForm


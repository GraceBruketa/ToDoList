/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react"
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from "react-native"

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen"
import ToDoList from "./ToDoList"
import ToDoForm from "./ToDoForm"

function Section({ children, title }) {
  const isDarkMode = useColorScheme() === "dark"
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black
          }
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark
          }
        ]}
      >
        {children}
      </Text>
    </View>
  )
}

function App() {
  const isDarkMode = useColorScheme() === "dark"

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  const [tasks, setTasks] = useState([
    { id: "1", text: "Buy groceries" },
    { id: "2", text: "Finish React Native project" },
    { id: "3", text: "Read a new book" },
  ])


 const addTask = (taskText) => {
    setTasks([...tasks, { id: Date.now().toString(), text: taskText }])
  }


return (
    <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} backgroundColor={backgroundStyle.backgroundColor} />
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
                <View style={styles.container}>
                    <Text style={styles.title}>ToDo List</Text>
                    <ToDoList tasks={tasks} />
                    <ToDoForm addTask={addTask} />
                </View>
            </ScrollView>
    </SafeAreaView>
    )
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400"
  },
  highlight: {
    fontWeight: "700"
  }
})

export default App

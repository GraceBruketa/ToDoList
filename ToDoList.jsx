       const isDarkMode = useColorScheme() === "dark"

       const backgroundStyle = {
         backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
       }

       const [task, setTask] = useState("") // State for new task input
         const [tasks, setTasks] = useState([
           { id: 1, text: "Buy groceries" },
           { id: 2, text: "Walk the dog" },
           { id: 3, text: "Read a book" }
         ])

       const addTask = () => {
         if (task.trim()) {
           setTasks([...tasks, { id: tasks.length + 1, text: task }])
           setTask("") // Clear the input field after adding
         }
       }

      <ScrollView style={styles.taskList}>
         <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Add a new task"
                  placeholderTextColor={isDarkMode ? Colors.light : Colors.dark}
                  value={task}
                  onChangeText={setTask}
                />
               <TouchableOpacity style={styles.addButton} onPress={addTask}>
                  <Text style={styles.addButtonText}>Add</Text>
               </TouchableOpacity>
            </View>
        {tasks.map((item) => (
            <View key={item.id} style={styles.taskItem}>
                <Text style={styles.taskText}>{item.text}</Text>
            </View>
        ))}
      </ScrollView>

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
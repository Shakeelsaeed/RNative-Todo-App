import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTask} from '../redux/reducers/tasksReducer';

const TaskForm = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      const newTask = {id: Date.now(), text: taskText, isCompleted: false};
      dispatch(addTask(newTask));
      setTaskText('');
    }
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>SHAYAN SOLUTIONS TASK</Text>
        <Text style={styles.subHeaderText}>TODO App</Text>
      </View>
      <TextInput
        placeholder="Enter Task"
        value={taskText}
        onChangeText={text => setTaskText(text)}
        style={styles.textInput}
        placeholderTextColor="#D9765E"
      />
      <TouchableOpacity onPress={handleAddTask} style={styles.button}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: Platform.OS === 'ios' ? 60 : 20,
    alignSelf: 'center',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#D9765E',
  },
  subHeaderText: {
    fontSize: 13,
    marginTop: 5,
    fontWeight: 'bold',
    color: 'black',
  },
  textInput: {
    borderWidth: 1,
    height: 50,
    borderColor: 'grey',
    borderRadius: 8,
    width: '100%',
    paddingHorizontal: 10,
  },
  button: {
    height: 50,
    borderRadius: 8,
    width: '100%',
    backgroundColor: '#D9765E',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default TaskForm;

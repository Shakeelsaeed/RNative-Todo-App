import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {changeStatus, removeTask} from '../redux/reducers/tasksReducer';
import {useDispatch} from 'react-redux';

const TaskCard = ({item}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.taskTextContainer}>
        <Text style={styles.taskText}>{item.text}</Text>
      </View>

      <View style={styles.actionsContainer}>
        <CheckBox
          style={styles.checkBox}
          tintColors={{true: '#D9765E', false: '#D9765E'}}
          boxType="square"
          onCheckColor="white"
          tintColor="#D9765E"
          onTintColor="#D9765E"
          onFillColor="#D9765E"
          value={item.isCompleted}
          onValueChange={() => {
            dispatch(changeStatus(item.id));
          }}
        />
        <TouchableOpacity
          onPress={() => {
            dispatch(removeTask(item.id));
          }}>
          <Image
            source={require('../assets/del.png')}
            style={styles.deleteIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e7fc',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskTextContainer: {
    width: '80%',
  },
  taskText: {
    fontSize: 14,
    overflow: 'hidden',
    color: 'black',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBox: {
    color: 'red',
    width: 20,
    height: 20,
    marginRight: 20,
  },
  deleteIcon: {
    width: 20,
    height: 20,
  },
});

export default TaskCard;

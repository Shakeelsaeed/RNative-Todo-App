import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import TaskCard from './TaskCard';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  return (
    <ScrollView>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <TaskCard item={item} />}
      />
    </ScrollView>
  );
};

export default TaskList;

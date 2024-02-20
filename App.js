import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './app/redux/store';
import TasksList from './app/components/TasksList';
import TaskForm from './app/components/TaskForm';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <View style={{flex: 0.3}}>
            <TaskForm />
          </View>
          <View style={{flex: 0.7}}>
            <Text style={styles.title}>My Tasks</Text>
            <TasksList />
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footertext}>
              Created by{' '}
              <Text
                style={{
                  color: '#D9765E',
                  fontSize: 16,
                }}>
                Shakeel Saeed
              </Text>
            </Text>
          </View>
        </View>
      </PersistGate>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  title: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  footertext: {
    marginLeft: 20,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
});

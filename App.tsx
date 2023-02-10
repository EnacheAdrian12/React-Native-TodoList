import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [mode, setMode] = useState('light');

  const addTodo = () => {
    if (!input) return;

    setTodos([...todos, { id: todos.length + 1, text: input }]);
    setInput('');
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const changeMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <View style={[styles.container, styles[`${mode}Mode`]]}>
       <TouchableOpacity style={[styles.modeButton, styles[`${mode}Button`]]} onPress={changeMode}>
        <Text style={[styles.modeButtonText, styles[`${mode}ButtonText`]]}>
          {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Text>
      </TouchableOpacity>
      <Text style={[styles.title, styles[`${mode}Title`]]}>Todo List</Text>
      <TextInput
        value={input}
        onChangeText={text => setInput(text)}
        style={[styles.input, styles[`${mode}Input`]]}
        placeholder="Add todo..."
        placeholderTextColor={mode === 'light' ? 'gray' : 'white'}
      />
      <TouchableOpacity style={[styles.addButton, styles[`${mode}Button`]]} onPress={addTodo}>
        <Text style={[styles.addButtonText, styles[`${mode}ButtonText`]]}>Add</Text>
      </TouchableOpacity>
     
      <FlatList
        style={[styles.list, styles[`${mode}List`]]}
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.listItem, styles[`${mode}ListItem`]]}>
            <Text style={[styles.listItemText, styles[`${mode}ListItemText`]]}>{item.text}</Text>
            <TouchableOpacity style={[styles.deleteButton, styles[`${mode}Button`]]} onPress={() => deleteTodo(item.id)}>
              <Text style={[styles.deleteButtonText, styles[`${mode}ButtonText`]]}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  title : {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  lightMode: {
    backgroundColor: 'white',
  },
  darkMode: {
    backgroundColor: 'black',
  },
  lightTitle: {
    color: 'black',
  },
  darkTitle: {
    color: 'white',
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
  },
  lightInput: {
    backgroundColor: 'white',
    color: 'black',
  },
  darkInput: {
    backgroundColor: 'black',
    color: 'white',
  },
  addButton: {
    width: 300,
    height: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightButton: {
    backgroundColor: 'green',
  },
  darkButton: {
    backgroundColor: 'white',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  lightButtonText: {
    color: 'white',
  },
  darkButtonText: {
    color: 'black',
  },
  modeButton: {
    width: 300,
    height: 50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  list: {
    width: 300,
    marginTop: 20,
  },
  lightList: {
    backgroundColor: 'white',
  },
  darkList: {
    backgroundColor: 'black',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  lightListItem: {
    backgroundColor: 'white',
  },
  darkListItem: {
    backgroundColor: 'black',
  },
  listItemText: {
    fontSize: 18,
  },
  lightListItemText: {
    color: 'black',
  },
  darkListItemText: {
    color: 'white',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
});
export default App;
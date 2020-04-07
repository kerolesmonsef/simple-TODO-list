import React, {useState, Component} from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView, Button} from 'react-native';
import TodoItem from "./components/TodoItem";
import TodoInput from './components/TodoInput'

export default function App() {
    let [todos, setTodos] = useState([]);


    const addTodo = todoContent => {
        if (todoContent == "") return;
        setTodos([{content: todoContent, id: Math.random().toString()}, ...todos]);
        // setTodoText("");
    }

    const removeTodo = todoID => {
        setTodos(todos.filter(todo => todo.id !== todoID))
    }

    return (
        <View style={styles.screen} >
            <TodoInput OnAddNewTODO={addTodo}/>
            <ScrollView>
                {
                    todos.map(todo => (
                        <TodoItem key={todo.id} todo={todo} OnRemoveTODO={removeTodo}/>)
                    )
                }
            </ScrollView>
        </View>
    )
        ;
}

const styles = StyleSheet.create({
    screen: {
        padding: 30,
    },
});

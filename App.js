import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, ToastAndroid } from 'react-native';
import TodoItem from "./components/TodoItem";
import TodoInput from './components/TodoInput'


export default function App() {
    let [todos, setTodos] = useState([]);
    let [IsAddTODOMode, SetIsAddTODOMode] = useState(false)

    const addTodo = todoContent => {
        if (todoContent == "") return;
        setTodos([{ content: todoContent, id: Math.random().toString() }, ...todos]);
        SetIsAddTODOMode(false);
        ToastAndroid.show("Todo Added Successfully",ToastAndroid.SHORT);
    }


    const removeTodo = todoID => {
        setTodos(todos.filter(todo => todo.id !== todoID))
    }

    return (
        <View style={styles.screen}>
            <Button title={"Add New TODO"} onPress={() => SetIsAddTODOMode(true)} />
            <TodoInput visable={IsAddTODOMode} OnAddNewTODO={addTodo} ChangeAddMode={SetIsAddTODOMode} />
            <ScrollView>
                {
                    todos.map(todo => (
                        <TodoItem key={todo.id} todo={todo} OnRemoveTODO={removeTodo} />)
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

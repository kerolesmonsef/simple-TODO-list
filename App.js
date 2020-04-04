import React, {useState, Component} from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView, Button} from 'react-native';

export default function App() {

    let [enterTodoText, setTodoText] = useState('');
    let [todos, setTodos] = useState([]);

    const onChangeTodoTextInput = (newText) => {
        setTodoText(newText);
    }

    const addTodo = () => {
        if (enterTodoText == "") return;
        setTodos([enterTodoText, ...todos]);
        // setTodoText("");

    }

    return (
        <View style={styles.screen}>
            <View style={styles.input_view}>
                <TextInput placeholder="Enter Todo ..." onChangeText={onChangeTodoTextInput}
                           style={styles.text_input_todo} value={enterTodoText}/>

                <Button title={"ADD"} onPress={addTodo}/>
            </View>
            <ScrollView>
                {
                    todos.map(todo =>
                        <View key={todo + Math.random()} style={styles.todoItem}>
                            <Text style={styles.todo_label}> {todo} </Text>
                            <Button title={"DEL"} onPress={() => {
                                alert("test Alwtedflk");
                            }} color="#dc3545"/>
                        </View>
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
    input_view: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
    },
    text_input_todo: {
        width: '80%',
        marginBottom: 2,
        borderWidth: 1,
        borderColor: "#ced4da",
        borderStyle: "solid",
        padding: 10,
    },
    todoItem: {
        marginTop: 20,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#f3f3f3",
        borderStyle: "solid",
    },
    todo_label: {
        width: "100%",
    },
});

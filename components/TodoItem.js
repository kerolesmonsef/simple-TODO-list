import React from 'react'
import {StyleSheet, Button, Text, View, TouchableOpacity} from "react-native";

const TodoItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.5} onLongPress={() => props.OnRemoveTODO(props.todo.id)}>
            <View style={styles.todoItem}>
                <Text style={styles.todo_label}> {props.todo.content} </Text>
                <View style={{display:"none"}}>
                    <Button title={"DEL"} color="#dc3545" onPress={null} />
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    todoItem: {
        marginTop: 20,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "blue",
        borderStyle: "solid",
    },
    todo_label: {
        width: "85%",
    },
});

export default TodoItem;
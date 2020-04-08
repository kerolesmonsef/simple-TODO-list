import React, {useState} from 'react'
import {StyleSheet, Button, Text, View, TextInput, Modal} from "react-native";

const TodoInput = props => {

    let [enterTodoText, setTodoText] = useState('');
    const onChangeTodoTextInput = (newText) => {
        setTodoText(newText);
    }

    let CloseAddTodoMode = () => {
        setTodoText("");
        props.ChangeAddMode(false)
    }

    let AddNewTodo = () => {
        props.OnAddNewTODO(enterTodoText)
    }

    return (
        <View style={styles.centeredView}>
            <Modal visible={props.visable} animationType="slide">
                <View style={styles.input_view}>
                    <Text style={{marginBottom: 50, color: "red"}}>Add New Todo</Text>
                    <TextInput placeholder="Enter Todo ..." onChangeText={onChangeTodoTextInput}
                               style={styles.text_input_todo} value={enterTodoText}/>
                    <View style={styles.buttons}>
                        <View style={styles.button}>
                            <Button color="red" title="Cancel" onPress={() => CloseAddTodoMode()}/>
                        </View>
                        <View style={styles.button}>
                            <Button title="ADD" onPress={AddNewTodo}/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    input_view: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    text_input_todo: {
        width: '80%',
        marginBottom: 2,
        borderWidth: 1,
        borderColor: "#ced4da",
        borderStyle: "solid",
        padding: 10,
        borderRadius: 5,
    },

    buttons: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%",
    },
    button: {
        width: "46%"
    }
});

export default TodoInput;
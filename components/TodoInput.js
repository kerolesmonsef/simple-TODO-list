import React, {useState} from 'react'
import {StyleSheet, Button, Text, View, TextInput, Modal} from "react-native";

const TodoInput = props => {

    let [enterTodoText, setTodoText] = useState('');
    const onChangeTodoTextInput = (newText) => {
        setTodoText(newText);
    }

    return (
        // <Modal visible={true}>
        <View style={styles.input_view}>
            <TextInput placeholder="Enter Todo ..." onChangeText={onChangeTodoTextInput}
                       style={styles.text_input_todo} value={enterTodoText}/>
            <View style={{paddingTop: 5}}>
                <Button title={} onPress={() => {
                    props.OnAddNewTODO(enterTodoText)
                }}/>
                <Button
            </View>
        </View>
        // </Modal>
    )
}


const styles = StyleSheet.create({
    input_view: {
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems: "center",
    },
    text_input_todo: {
        width: '80%',
        marginBottom: 2,
        borderWidth: 1,
        borderColor: "#ced4da",
        borderStyle: "solid",
        padding: 10,
    },
});

export default TodoInput;
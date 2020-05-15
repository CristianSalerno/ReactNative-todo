import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('')
  };

  return (
    <Modal animationType="slide" visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Task"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={props.onCancel} color="red" />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;

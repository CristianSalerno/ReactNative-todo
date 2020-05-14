import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isShowAddModal, setShowAddModal] = useState(false);

  console.log(courseGoals);

  const addGoalHandler = (goalEntered) => {
    setCourseGoals([
      ...courseGoals,
      { id: Math.random().toString(), value: goalEntered },
    ]);
    setShowAddModal(false);
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const showModalHandler = () => {
    setShowAddModal(true);
  };

  const cancelActionShowAddModal = () => {
    setShowAddModal(false);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>TO-DO React Native</Text>
      <Button title="add task" onPress={showModalHandler} />
      <GoalInput
        visible={isShowAddModal}
        onAddGoal={addGoalHandler}
        onCancel={cancelActionShowAddModal}
      />
      <FlatList
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={(dataItem) => (
          <GoalItem
            id={dataItem.item.id}
            onDelete={deleteGoalHandler}
            title={dataItem.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  title: {
    fontWeight: "700",
    padding: 20,
    fontSize: 25,
  },
});

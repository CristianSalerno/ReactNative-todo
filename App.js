import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  console.log(courseGoals);

  const addGoalHandler = (goalEntered) => {
    setCourseGoals([
      ...courseGoals,
      { id: Math.random().toString(), value: goalEntered },
    ]);
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>TO-DO React Native</Text>
      <GoalInput onAddGoal={addGoalHandler} />
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

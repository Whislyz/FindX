import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default HighScores = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.highScoresTable}>
        <Text> Name </Text>
        <Text> Scores </Text>
        <Text> Date </Text>

      </View>
      <View style={styles.closeButton}>
        <Button onPress={() => props.modalHandle(false)} title="Close"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 50,
    overflow: "hidden",
  },
  highScoresTable: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around',
  }
});
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default HighScores = (props) => {

  return (
    <View style={styles.container}>
      <View>
        <Text> High Scores Table </Text>
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
});
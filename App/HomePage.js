import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default HomePage = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./Images/classroom.jpg')} style={styles.image}>
        <View style={styles.highScoresButton}>
          <Button title="High Scores"/>
        </View>
        <View style={styles.highScoresButton}>
          <Button onPress={() => props.pageHandle("NewGame")} title="New Game"/>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  highScoresButton: {
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 50,
    overflow: "hidden",
  },
});
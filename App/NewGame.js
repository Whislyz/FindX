import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default class NewGame extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./Images/board2.jpg')} style={styles.image}>
          <View style={styles.question}>
            <Text >Question</Text>
          </View>
          <View style={styles.timer}>
            <Text>Times</Text>
          </View>
          <View style={styles.score}>
            <Text>Scores</Text>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  question: {
    flex:1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 100,
  },
  timer: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 150,
  },
  score: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 150,
  },
})
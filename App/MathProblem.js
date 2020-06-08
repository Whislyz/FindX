import React from 'react';
import { TouchableNativeFeedback, Text, View, Button, StyleSheet } from 'react-native';

class MathProblem extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      problems: this.props.problems,
      currentProblem: this.props.problems[0],
      currentScore: 0,
      counter: 0,
    }

    this.answerHandle=this.answerHandle.bind(this);
  }

  answerHandle(answer){
    const solution = this.state.currentProblem.answer;
    const newCounter = this.state.counter + 1;
    console.log(solution, newCounter);
    this.setState({
      counter: newCounter,
      currentProblem: this.props.problems[newCounter],
    });
    if (answer === solution) {
      this.props.scoreHandle();
    }
  }

  render() {
    console.log('from math problem' , this.state.problems);
    const {currentProblem} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.mathProblem}>
          <View style={styles.problemDescription}>
            <Text> {currentProblem.problem} </Text>
          </View>

          <View style={styles.answers}>
            <Button onPress={() => this.answerHandle('a')}
              title={currentProblem.a}  />
          </View>
          <View style={styles.answers}>
            <Button onPress={() => this.answerHandle('b')}
              title={currentProblem.b}  />
          </View>
          <View style={styles.answers}>
            <Button onPress={() => this.answerHandle('c')}
              title={currentProblem.c}  />
          </View>
          <View style={styles.answers}>
            <Button onPress={() => this.answerHandle('d')}
              title={currentProblem.d}  />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    borderWidth: 1,
    borderColor: 'red',
  },
  mathProblem: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  problemDescription: {

  },
  answers: {

  },
})

export default MathProblem;
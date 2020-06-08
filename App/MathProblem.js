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

          <View style={styles.problemView}>
            <Text style={styles.problemText}>{currentProblem.problem} </Text>
          </View>

          <View style={styles.answersView}>
            <Button onPress={() => this.answerHandle('a')}
              title={'A. ' + currentProblem.a}  />
          </View>
          <View style={styles.answersView}>
            <Button onPress={() => this.answerHandle('b')}
              title={'B. ' + currentProblem.b}  />
          </View>
          <View style={styles.answersView}>
            <Button onPress={() => this.answerHandle('c')}
              title={'C. ' + currentProblem.c}  />
          </View>
          <View style={styles.answersView}>
            <Button color="transparent" onPress={() => this.answerHandle('d')}
              title={'D. ' + currentProblem.d}  />
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
  problemView: {
    marginLeft: 15,
    marginRight: 15,
  },
  problemText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  answersView: {
    marginLeft: 15,
    alignItems: 'flex-start',
    width: 100,

  },
  answersText: {

  },
})

export default MathProblem;
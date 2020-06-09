import React from 'react';
import { TouchableOpacity, Text, View, Button, StyleSheet } from 'react-native';

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
        <View style={styles.multipleChoices}>
          <View style={styles.answersView}>
            <TouchableOpacity style={styles.button} onPress={() => this.answerHandle('a')} >
              <Text style={styles.textStyle}>{'A. ' + currentProblem.a}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.answersView}>
            <TouchableOpacity style={styles.button} onPress={() => this.answerHandle('b')} >
              <Text style={styles.textStyle}>{'B. ' + currentProblem.b}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.answersView}>
            <TouchableOpacity style={styles.button} onPress={() => this.answerHandle('c')} >
              <Text style={styles.textStyle}>{'C. ' + currentProblem.c}</Text>
            </TouchableOpacity>
          </View>

           <View style={styles.answersView}>
              <TouchableOpacity style={styles.button} onPress={() => this.answerHandle('d')} >
                <Text style={styles.textStyle}>{'D. ' + currentProblem.d}</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
  },
  button: {
    backgroundColor: "#276965",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 70,
    justifyContent: 'center',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,

  },
  multipleChoices: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
  },
  problemView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  problemText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  answersView: {
    width: 320,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'transparent',
    paddingBottom: 20,
    paddingTop: 10,

  },
})

export default MathProblem;
import React from 'react';
import { Modal, Animated, Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MathProblem from './MathProblem.js';

export default class NewGame extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      score: 0,
      modalVisible: false,
      username: '',
    }

    this.scoreHandle = this.scoreHandle.bind(this);
    this.modalHandle = this.modalHandle.bind(this);
    this.submitScore = this.submitScore.bind(this);
  }

  scoreHandle() {
    const newScore = this.state.score + 1;
    this.setState({score: newScore});
  }

  modalHandle(visible) {
    this.setState({modalVisible: visible});
  };

  inputHandle(text) {
    console.log(text);
    this.setState({username: text})
  }

  submitScore() {
    const {username, score} = this.state;
    this.props.submitScore(username, score)
  }

  render() {
    const modalState = this.state.modalVisible;
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./Images/classroom3.jpg')} style={styles.image}>
          <Modal
            animationType="fade"
            transparent={false}
            visible={modalState}
            onRequestClose={() => {Alert.alert("Score has been submitted.")}}
          >
            <View style={styles.resultView}>
              <View style={styles.modalScoreView}>
                <Text style={styles.modalText}> Great Job! Your score is {this.state.score} </Text>
              </View>
              <Input
                inputStyle={styles.modalInput}
                label="Please Enter Your Name"
                // placeholder="username"
                leftIcon={<Icon name="user" size={20} color="white" />}
                value={this.state.username}
                onChangeText={ text => this.inputHandle(text)}
                onSubmitEditing={this.submitScore}
              />
            </View>
          </Modal>

          <View style={styles.scoreView}>
            <Text style={styles.scoreText}>Score : {this.state.score} </Text>
          </View>

          <MathProblem
            problems={this.props.mathProblems}
            scoreHandle={this.scoreHandle}
          />

          <View style={styles.timer}>
            <CountdownCircleTimer
              isPlaying
              duration={30}
              size={120}
              colors={[['#004777', 0.4], ['#F7B801', 0.4], ['#A30000']]}
              onComplete={ () => this.modalHandle(true)}
            >
              {({ remainingTime, animatedColor }) => (
                <Animated.Text style={{ color: animatedColor, fontSize: 40}}>
                  {remainingTime}
                </Animated.Text>
              )}
            </CountdownCircleTimer>
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
    // justifyContent: "space-between",
  },
  timer: {
    flex: 2,
    alignItems: "center",
    justifyContent: 'flex-end',
    paddingBottom: 40,

  },
  scoreView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 11,
  },
  scoreText: {
    fontSize: 20,
    color: "white",
  },


  resultView: {
    flex: 1,
    backgroundColor: '#276965',
    justifyContent: 'center',
  },
  modalScoreView: {
    paddingBottom: 30,
  },
  modalText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  modalInput: {
    color: 'white',
  },
})
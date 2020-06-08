import React from 'react';
import axios from 'axios';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import HomePage from './HomePage.js';
import NewGame from './NewGame.js';
import HighScores from './HighScores.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: "HomePage",
      highScores: [],
      mathProblems: [],
    }

    this.pageHandle = this.pageHandle.bind(this);
    this.submitScore = this.submitScore.bind(this);
  }

  async componentDidMount() {
    const highScores = await axios.get('http://192.168.1.111:3000/api/highscores');
    const mathProblems = await axios.get('http://192.168.1.111:3000/api/mathProblems');
    console.log('did mount', highScores.data, mathProblems.data)
    this.setState({
      highScores: highScores.data,
      mathProblems: mathProblems.data,
    });
  };

  pageHandle(page) {
    console.log('page handle', page)
    this.setState({display: page})
  };

  async submitScore(username, score) {
    this.setState({display: "HomePage"})
    await axios.post('http://192.168.1.111:3000/api/score', {
      data: {
        username,
        score,
      }
    })
    const highScores = await axios.get('http://192.168.1.111:3000/api/highscores');
    this.setState({
      highScores: highScores.data,
    });
  }

  render() {
    const page = this.state.display;
    console.log('this page:' , page);
    if (page === "HomePage") {
      return (
        <HomePage
          pageHandle={this.pageHandle}
          highScores={this.state.highScores}
        />
      )
    } else {
      return (
        <NewGame
          pageHandle={this.pageHandle}
          mathProblems={this.state.mathProblems}
          submitScore={this.submitScore}
        />
      )
    }
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default App;
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
    }

    this.pageHandle = this.pageHandle.bind(this);
  }

  componentDidMount() {
    axios.get('http://192.168.1.111:3000/api/highscores')
    .then( ({data}) => {
      console.log("Component Did Mount ", data);
      this.setState({highScores: data})
    })
    .catch( (err) => console.log('err from getting HS', err))
  };

  pageHandle(page) {
    console.log('page handle', page)
    this.setState({display: page})
  };

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
        <NewGame pageHandle={this.pageHandle} />
      )
    }
  };
};

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

export default App;
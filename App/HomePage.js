import React from 'react';
import { Modal, TouchableHighlight, Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import HighScores from './HighScores.js';

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalVisible: false,
    }
    this.modalHandle = this.modalHandle.bind(this);
  }

  modalHandle(visible) {
    this.setState({modalVisible: visible});
  };

  render() {
    const modalState = this.state.modalVisible;
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./Images/classroom.jpg')} style={styles.image}>
          <Modal
            animationType="fade"
            transparent={false}
            visible={modalState}
            onRequestClose={() => {
              Alert.alert("High Scores window has been closed.");
            }}
          >
            <HighScores
              modalHandle={this.modalHandle}
              highScores={this.props.highScores}
            />
          </Modal>


          <View style={styles.highScoresView}>
            <TouchableHighlight
              style={styles.button}
              onPress={() => this.modalHandle(true)}
            >
              <Text style={styles.textStyle}>High Scores</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.newGameView}>
            <TouchableHighlight
              style={styles.button}
              onPress={() => this.props.pageHandle("NewGame")}
            >
              <Text style={styles.textStyle}>New Game</Text>
            </TouchableHighlight>
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
    alignItems: "center",
  },
  highScoresView: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
    width: 150,
  },
  newGameView: {
    flex: 1,
    width: 150,
  },
  button: {
    backgroundColor: "#76AD3D",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
});

export default HomePage;

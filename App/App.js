import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      init: "test this"
    }
  }

  componentDidMount() {
    axios.get('http://192.168.1.111:3000/api/DummyTest')
      .then( ({data}) => {
        console.log('comeback', data)
        this.setState({init: data})
      })
      .catch( (err) => console.log('errrrrrr', err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> {this.state.init} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

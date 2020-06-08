import React from 'react';
import { TouchableHighlight, Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import ScoreRow from './ScoreRow.js';

export default HighScores = (props) => {
  console.log('from hightscore', props.highScores);
  const highScores = props.highScores;
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./Images/scroll3.png')} style={styles.image}>

        <View style={styles.highScoresTable}>

          <View style={styles.tableRow}>
            <View style={styles.nameColumn}>
              <Text style={styles.columnNames}>Names</Text>
            </View>
            <View style={styles.scoresColumn}>
              <Text style={styles.columnNames}>Scores</Text>
            </View>
            <View style={styles.dateColumn}>
              <Text style={styles.columnNames}>Dates</Text>
            </View>
          </View>

          {highScores.map( ({id, score,username,date_created}) =>
            <ScoreRow
              key={id}
              score={score}
              username={username}
              date_created={date_created}
            />
          )}
        </View>

        <View style={styles.closeButtonView}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => props.modalHandle(false)}
          >
            <Text style={styles.textStyle}>X</Text>
          </TouchableHighlight>
        </View>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    // alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    // justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  highScoresTable: {
    flex: 0,
    paddingTop: 290,
    paddingRight: 20,
    justifyContent: "flex-start",
    alignItems: 'center',
  },
  closeButtonView: {
    flex: 1,
    width: 220,
    paddingTop: 160,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  button: {
    backgroundColor: "#76AD3D",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  tableRow: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  nameColumn: {
    // flex: 1,
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: 'center',
  },
  scoresColumn: {
    // flex: 1,
    width: 60,
    height: 30,
    justifyContent: "center",
    alignItems: 'center',
  },
  dateColumn: {
    // flex: 1,
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: 'center',
  },
  columnNames: {
    fontSize: 17,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#006A7A',
  }


});
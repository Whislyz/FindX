import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const ScoreRow = ({score, username, date_created}) => {

  console.log(score, username, date_created);

  return (
    <View style={styles.tableRow}>
      <View style={styles.nameColumn}>
        <Text style={styles.text}> {username} </Text>
      </View>

      <View style={styles.scoresColumn}>
        <Text style={styles.text}> {score} </Text>
      </View>

      <View style={styles.dateColumn}>
        <Text style={styles.text}> {date_created} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
  text: {
    fontWeight: 'bold',
    color: '#515152',
  }
});
export default ScoreRow;

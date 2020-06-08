import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const ScoreRow = ({score, username, date_created}) => {

  console.log(score, username, date_created);

  return (
    <View style={styles.tableRow}>
      <View style={styles.nameColumn}>
        <Text> {username} </Text>
      </View>

      <View style={styles.scoresColumn}>
        <Text> {score} </Text>
      </View>

      <View style={styles.dateColumn}>
        <Text> {date_created} </Text>
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
    width: 150,
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "blue",
    justifyContent: "center",
    alignItems: 'center',
  },
  scoresColumn: {
    // flex: 1,
    width: 75,
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "blue",
    justifyContent: "center",
    alignItems: 'center',
  },
  dateColumn: {
    // flex: 1,
    width: 100,
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "blue",
    justifyContent: "center",
    alignItems: 'center',
  },
});
export default ScoreRow;

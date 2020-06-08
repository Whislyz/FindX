import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import ScoreRow from './ScoreRow.js';

export default HighScores = (props) => {
  console.log('from hightscore', props.highScores);
  const highScores = props.highScores;
  return (
    <View style={styles.container}>
      <View style={styles.highScoresTable}>
        <ScoreRow score={"Scores"} username={"Names"} date_created={"Date"} />
        {highScores.map( ({score,username,date_created}) =>
          <ScoreRow
            score={score}
            username={username}
            date_created={date_created}
          />
        )}
      </View>

      <View style={styles.closeButton}>
        <Button onPress={() => props.modalHandle(false)} title="X"/>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    // alignItems: "center",
  },
  highScoresTable: {
    flex: 0,
    paddingTop: 100,
    justifyContent: "flex-start",
    alignItems: 'center',
  },
  closeButton: {
    // flex: 1,
    // justifyContent: "flex-end",
    // alignItems: "center",
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 50,
    overflow: "hidden",
  },


});
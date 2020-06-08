const { client } = require('../db/index.js');
const {formatData} = require('./helper.js');

const getHighScores = async () => {
  const sql = "SELECT * FROM highscores";
  const data = await client.query(sql);
  return data.rows;
}

const getMathProblems = async () => {
  const sql = "SELECT * FROM maths";
  const data = await client.query(sql);
  return data.rows;

}

module.exports = {getHighScores, getMathProblems};

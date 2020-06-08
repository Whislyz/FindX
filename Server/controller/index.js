const { client } = require('../db/index.js');
const {formatData} = require('./helper.js');
const moment = require('moment');
const _ = require('underscore');

const getHighScores = async () => {
  const sql = "SELECT * FROM highscores ORDER BY score desc";
  const data = await client.query(sql);
  return data.rows;
}

const getMathProblems = async () => {
  const sql = "SELECT * FROM maths";
  const data = await client.query(sql);
  const result = _.shuffle(data.rows);
  return result;
}

const insertScore = async (score, userName) => {
  const date = moment().format("L");
  console.log(userName, score, date)
  const sql = `INSERT INTO highscores(username, score, date_created) values('${userName}', ${score}, '${date}')`;
  await client.query(sql);
  return "success";
}

module.exports = {getHighScores, getMathProblems, insertScore};

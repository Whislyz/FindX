const { client } = require('../db/index.js');
const {formatData} = require('./helper.js');

const getHighScores = async () => {
  const sql = "SELECT * FROM highscores";
  const data = await client.query(sql);
  return data.rows;
}

module.exports = {getHighScores};

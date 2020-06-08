DROP DATABASE IF EXISTS maths;

CREATE DATABASE maths;
\c maths;

CREATE TABLE highscores (
  id SERIAL PRIMARY KEY,
  username VARCHAR(30) NOT NULL,
  score INT NOT NULL,
  date_created Date
);

CREATE TABLE maths (
  id SERIAL PRIMARY KEY,
  problem TEXT NOT NULL,
  a TEXT NOT NULL,
  b TEXT NOT NULL,
  c TEXT NOT NULL,
  d TEXT NOT NULL,
  answer VARCHAR(5) NOT NULL
);

INSERT INTO highscores(username, score) values ('Daddy', 10000);
INSERT INTO highscores(username, score) values ('Mommy', 99999);

COPY maths(problem, a, b, c, d, answer) FROM '/Users/whisly/Documents/HR/mvp/FindX/Server/db/mathProblems.txt' WITH DELIMITER ',';


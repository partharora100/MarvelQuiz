const readlineSync = require("readline-sync")

let userName = readlineSync.question("Welcome User,May I Have Your Name? ")

console.log(`Welcome ${userName} , to the game "Marvel Quiz"`)


// the database
const questionsDatabase = [{
  question: "On what planet was the Soul Stone in Infinity War? ",
  answer: "Vormir"
}, {
  question: "What is Tony Stark's daughter's name? ",
  answer: "Morgan Stark"
}, {
  question: "Who was able to pick up Thor’s hammer in Endgame? ",
  answer: "Captain America"
}, {
  question: "How many Infinity Stones are there? ",
  answer: "Six"
}, {
  question: "Thor played what video game in Avengers: Endgame? ",
  answer: "Fortnite"
}, {
  question: "Stan Lee made his final cameo in which Marvel movie? ",
  answer: "Avengers: Endgame"
}, {
  question: "What does Doctor Strange call his cape? ",
  answer: "Cloak"
}, {
  question: "Who did Captain America give his shield to in Endgame?? ",
  answer: "Sam"
}]

// the highscore
const highScore = [{
  name: "Parth",
  score: 8
},
{
  name: "Diksha",
  score: 7
}]


let score = 0
const play = function(question, answer) {

  let userAnswer = readlineSync.question(question)

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score++
    console.log(`Your are rigth and your current is ${score}`)
    console.log("--------------------")
  } else {
    score--
    console.log(`You are wrong and your current score is ${score}`)
    console.log("--------------------")
  }

}

for (let question of questionsDatabase) {
  play(question.question, question.answer)
}

console.log(`Your Final Score is: ${score}`)
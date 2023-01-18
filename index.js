function checkAnswer() {
  const answer1 = document.querySelector("#answer1");
  const answerResponse1 = document.querySelector("#respons1");
  const answer2 = document.querySelector("#answer2");
  const answerResponse2 = document.querySelector("#respons2");

  if (answer1.value == "cat") {
    answerResponse1.innerHTML = "Benar";
    answerResponse1.style = "color: green;";
  } else {
    answerResponse1.innerHTML = "salah";
    answerResponse1.style = "color: red;";
  }
  if (answer2.value == "jogging") {
    answerResponse2.innerHTML = "Benar";
    answerResponse2.style = "color: green;";
  } else {
    answerResponse2.innerHTML = "salah";
    answerResponse2.style = "color: green;";
  }
}

"use strict";

const summarySpecific = document.querySelector(".summary-specific");
const userScore = document.querySelector(".user-score");

async function data() {
  const data = await (await fetch("./data.json")).json();
  let scores = [];

  data.forEach((obj) => {
    const htmlForSummarySpecific = `<div class="summary-specific--${obj.category.toLowerCase()} summary-specific--box">
  <span class="category-and-its-image"
   ><img src="${obj.icon}" alt="Image for ${obj.category.toLowerCase()}" />
    <h3 id="type-4-name">${obj.category}</h3></span>
  <span class="text">
    <span class="dark-gray">${obj.score} </span>
    <span class="light-gray"> / 100</span></span
  ></div>`;

    summarySpecific.insertAdjacentHTML("beforeend", htmlForSummarySpecific);

    scores = [...scores, obj.score];
    const scoresReduced = scores
      .reduce((prev, cur) => prev + cur / data.length, 0)
      .toFixed(0);

    const htmlForUserScore = `<p class="user-score">${scoresReduced}</p>`;
    userScore.innerHTML = htmlForUserScore;
  });
}

data();

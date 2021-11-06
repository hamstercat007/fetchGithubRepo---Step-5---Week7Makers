const fetchGithubRepo = require("./fetchgithubrepo.js");

// fetchGithubRepo("sinatra/sinatra", (repoDataReturned) => {
//   document.write(JSON.stringify(repoDataReturned));
// });

//call all your functions in index.js

//document.element,id for button, input value
//upon click function of form button, run fetchgithubRep

const buttonEl = document.getElementById("submit");
const inputEl = document.getElementById("input-field");

buttonEl.addEventListener("click", () => {
  fetchGithubRepo(inputEl.value, (repoDataReturned) => {
    document.write(JSON.stringify(repoDataReturned));
  });
});

//document.write is overwriting everything on html

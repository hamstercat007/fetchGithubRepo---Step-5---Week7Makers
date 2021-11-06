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
    // document.write(JSON.stringify(repoDataReturned));
    document.getElementById("repoName").innerText = repoDataReturned.name;
    document.getElementById("profilePic").src =
      repoDataReturned.owner.avatar_url;
    document.getElementById("linkGitHubPage").href = repoDataReturned.html_url;
    document.getElementById("linkGitHubPage").innerText = repoDataReturned.name;
    document.getElementById("stargazers").innerText =
      repoDataReturned.stargazers_count;
    document.getElementById("forks").innerText = repoDataReturned.forks_count;
    document.getElementById("language").innerText = repoDataReturned.language;
  });
});

//document.write is overwriting everything on html

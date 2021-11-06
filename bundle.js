(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // fetchgithubrepo.js
  var require_fetchgithubrepo = __commonJS({
    "fetchgithubrepo.js"(exports, module) {
      function fetchGithubRepo2(repoName, callbackFunction) {
        fetch(`https://api.github.com/repos/${repoName}`).then((response) => response.json()).then(callbackFunction);
      }
      module.exports = fetchGithubRepo2;
    }
  });

  // index.js
  var fetchGithubRepo = require_fetchgithubrepo();
  var buttonEl = document.getElementById("submit");
  var inputEl = document.getElementById("input-field");
  buttonEl.addEventListener("click", () => {
    fetchGithubRepo(inputEl.value, (repoDataReturned) => {
      document.getElementById("repoName").innerText = repoDataReturned.name;
      document.getElementById("profilePic").src = repoDataReturned.owner.avatar_url;
      document.getElementById("linkGitHubPage").href = repoDataReturned.html_url;
      document.getElementById("linkGitHubPage").innerText = repoDataReturned.name;
      document.getElementById("stargazers").innerText = repoDataReturned.stargazers_count;
      document.getElementById("forks").innerText = repoDataReturned.forks_count;
      document.getElementById("language").innerText = repoDataReturned.language;
    });
  });
})();

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
      document.write(JSON.stringify(repoDataReturned));
    });
  });
})();

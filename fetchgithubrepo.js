function fetchGithubRepo(repoName, callbackFunction) {
  fetch(`https://api.github.com/repos/${repoName}`)
    .then((response) => response.json())
    .then(callbackFunction);
}

module.exports = fetchGithubRepo;

function fetchGithubRepo(repoName, callbackFunction) {
  fetch(`https://api.github.com/repos/${repoName}`)
    .then((response) => response.json())
    .then(callbackFunction);
}

module.exports = fetchGithubRepo;


//single responsibility. This function returns the data back
//this is the only thing it should do. 
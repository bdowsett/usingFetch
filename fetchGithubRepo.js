fetchGithubRepo = (name, callback) => {
    fetch(`https://api.github.com/repos/${name}`)
    .then(response => response.json())
    .then(jsonData => {
        callback(jsonData);
    });

}

module.exports = fetchGithubRepo
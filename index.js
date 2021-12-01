const fetchGithubRepo = require("./fetchGithubRepo");
const addContent = require("./addContent")

const button = document.querySelector("#button");
const url = document.querySelector("#url");

button.addEventListener("click", () => {
    fetchGithubRepo(url.value, function callback(data){
        addContent(data)
        
    });

})
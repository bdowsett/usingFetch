(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // fetchGithubRepo.js
  var require_fetchGithubRepo = __commonJS({
    "fetchGithubRepo.js"(exports, module) {
      fetchGithubRepo = (name, callback) => {
        fetch(`https://api.github.com/repos/${name}`).then((response) => response.json()).then((jsonData) => {
          callback(jsonData);
        });
      };
      module.exports = fetchGithubRepo;
    }
  });

  // addContent.js
  var require_addContent = __commonJS({
    "addContent.js"(exports, module) {
      addContent = (data) => {
        console.log(data.html_url);
        const title = document.querySelector("#title");
        title.innerText = `Repo name: ${data.name}`;
        const star = document.querySelector("#star");
        star.innerText = `stargazers: ${data.stargazers_count}`;
        const forks = document.querySelector("#forks");
        forks.innerText = `No of forks: ${data.forks_count}`;
        const link = document.querySelector("#link");
        link.innerHTML = `Link <a href="${data.html_url}">Click Here</a>`;
        const image = document.querySelector("#image");
        image.innerHTML = `<img src= ${data.organization.avatar_url}>`;
      };
      module.exports = addContent;
    }
  });

  // index.js
  var fetchGithubRepo2 = require_fetchGithubRepo();
  var addContent2 = require_addContent();
  var button = document.querySelector("#button");
  var url = document.querySelector("#url");
  button.addEventListener("click", () => {
    fetchGithubRepo2(url.value, function callback(data) {
      addContent2(data);
    });
  });
})();

addContent = (data) => {
    console.log(data.html_url)
    const title = document.querySelector("#title")
    title.innerText = `Repo name: ${data.name}`
    const star = document.querySelector("#star")
    star.innerText = `stargazers: ${data.stargazers_count}`
    const forks = document.querySelector("#forks")
    forks.innerText = `No of forks: ${data.forks_count}`
    const link = document.querySelector("#link")
    link.innerHTML = `Link <a href="${data.html_url}">Click Here</a>`

    const image = document.querySelector("#image")
    image.innerHTML = `<img src= ${data.organization.avatar_url}>`

}

module.exports = addContent;
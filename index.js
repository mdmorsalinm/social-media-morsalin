let postTitles = [];
let postPhotos = [];
let postPara = [];
let postName = [];

async function getPost() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let j = await response.json()
    return j;
}


getPost()
.then ((json) => {
    for (let i = 0; i < 6; i++) {
        postTitles.push(json[i].title)
        postPara.push(json[i].body)
        let div = document.getElementsByTagName("div")
        for (let i = 0; i < 6; i++) {
            div[i].getElementsByTagName("h6")[0].innerHTML = postTitles[i];
            div[i].getElementsByTagName("p")[0].innerHTML = postPara[i];
        }
    }
})


async function getPhotos() {
    let response = await fetch("https://jsonplaceholder.typicode.com/photos")
    let j = await response.json()
    return j;
}


getPhotos()
.then ((json) => {
    for (let i = 0; i < 6; i++) {
        postPhotos.push(json[i].url)
    }
    let div = document.getElementsByTagName("div")
    for (let i = 0; i < 6; i++) {
        div[i].getElementsByTagName("img")[0].src = postPhotos[i];
    }
})

async function getUsername() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let j = await response.json()
    return j;
}


getUsername()
.then ((json) => {
    for (let i = 0; i < 6; i++) {
        postName.push(json[i].name)
    }
    let div = document.getElementsByTagName("div")
    for (let i = 0; i < 6; i++) {
        div[i].getElementsByTagName("h4")[0].innerHTML = postName[i];
    }
})
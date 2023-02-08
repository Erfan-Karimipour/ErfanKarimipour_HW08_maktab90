`use strict`

function bg(createdshit) {
    createdshit.style.backgroundColor = `purple`;
}
function color(createdshit) {
    createdshit.style.color = `red`;
}
function fonts(createdshit) {
    createdshit.style.fontSize = `5rem`
}

function creatoroftheworld(tagname, payback) {

    let createdshit = document.createElement(`${tagname}`);
    createdshit.innerHTML = `The ${tagname} has bin created ✋`;
    document.body.append(createdshit);
    switch (payback) {
        case `background`: bg(createdshit);
        case `color`: color(createdshit);
        case `font size`: fonts(createdshit);
    }
}

creatoroftheworld(prompt(), prompt());
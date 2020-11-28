let items = document.getElementsByTagName("*");
let tags = [];
for (let i = 0; i < items.length; i++) {
    tags[i] = items[i].tagName;
}
let uniqueTags = [...new Set(tags)];
let tagsCount = "";
for (let i = 0; i < uniqueTags.length; i++) {
    tagsCount += uniqueTags[i] + ": " + document.getElementsByTagName(uniqueTags[i]).length + "\n";
}
let container  = document.querySelector('main')
console.log(container)
let divWithTags = document.createElement('div');
let tagsStr = document.createElement('p');

tagsStr.classList.add('topic')
tagsStr.innerHTML = tagsCount

divWithTags.append(tagsStr)
container.append(divWithTags)

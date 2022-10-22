var content = "Sehun's Home"
var text = document.querySelector('#typing-text')
var index = 0;

function typing() {
    text.textContent += content[index++];
    if(index > content.length) {
        text.textContent = "";
        index = 0;
    }
}
setInterval(typing, 200);
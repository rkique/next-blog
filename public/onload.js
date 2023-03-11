window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-637SKJYBQG');

function toggleText(toggle, initialText){
    console.log(`Im a toggle ${initialText}`)
    if (toggle.innerText == initialText[0]){
        toggle.innerText = initialText[1]
    } else {toggle.innerText = initialText[0]}
}

function initToggle(){
    toggles = Array.from(document.getElementsByClassName("toggle"))
    initialText = toggles.map(toggle => toggle.innerText.split(';'))
    toggles.forEach((toggle,i) => {
        toggle.onmouseover = function(){toggleText(toggle, initialText[i])}
        toggle.onmouseout = function(){toggleText(toggle, initialText[i])}
    }
    )
    toggles.forEach((toggle,i) => toggle.innerText = initialText[i][0])
    toggles.forEach(toggle => toggle.style.display = "inline")
}



window.onload = function(){
    initToggle()
}


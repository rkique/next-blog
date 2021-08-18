array = [
"I never found beauty in longing for the impossible",
"we stand on the last promontory of the centuries...",
"biological improvisation kills determinism", 
"your fourth grade self against the world",
"you don't need to work on hard problems",
"my friends are going to save the world",
"you don't need to pay someone to live intentionally",
"there is no speed limit",
"Keep it simple, stupid!",
"reject externally imposed dreams",
"Universal Basic Paraglider",
"don't be a tourist",
"meaninglessness is a symptom",
"you don't get to tell me what to care about!",
"we lack courage, not genius",
"form follows function",
"beneath the pavingstones, the beach"
]

function shuffleArray(array) {
for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
}
k = Math.floor(Math.random() * array.length)
function changeQuote(){
randomElement = array[k];
k = k + 1;
k = k % array.length
randomElement = randomElement.split("")
ll = randomElement.length
quoteArray = new Array(ll).fill("□")
idxidx = 0;
idxArray = []
for (let i = 0; i < ll; i++) {
 idxArray.push(i)
}
shuffleArray(idxArray)
}

function spreadText(){
if(idxidx < idxArray.length)
{
    thisIdx = idxArray[idxidx] 
   quoteArray[thisIdx] = randomElement[thisIdx]
   idxidx +=1
   document.getElementById("quotes").innerText = quoteArray.join("")
}
}
changeQuote()
setInterval(function(){changeQuote()}, 3600)
setInterval(function(){spreadText()},20)
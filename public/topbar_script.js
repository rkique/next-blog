array = [
    "be daylight to civilization's lamplight",
    "read a bit and then stop reading",
    "don't be a tourist",
    "your fourth grade self against the world",
    "there are only a few hard things",
    "reject externally imposed dreams",
    "we lack courage, not genius",
    "my heart is in the work",
    "you don't have to pay someone to live intentionally",
    "refuse to pass over that which cannot be said",
    "biological improvisation kills determinism",
    "make the future past prediction"
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
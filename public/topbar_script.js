array = [    
    "reject externally imposed dreams",
    "don't be a tourist",
    "I am a wild horse",
    "your fourth grade self against the world",
    "we lack courage, not genius",
    "Universal Basic Paraglider",
    "Save yourself! Go outside! Do something!",
    "There is no speed limit",
    "daylight to lamplight",
    "the above proposition is occasionally useful",
    "it is always the listener's burden to understand the outer message",
    "you don't have to pay someone to live intentionally",
    "refuse to pass over that which cannot be said",
    "biological improvisation kills determinism",
    "Who's afraid of Virginia Woolf?",
    "vector love and paper chasers wring out leaner biotech dreamers",
    "in search of rare transmutations of money and time",
    "my friends are going to save the world",
    "my heart is in the work",
    "there are only a few hard things",
    "spontaneity is all that matters",
    "Nobody was thinking about you, anyways",
    "everything is walking distance if I want it to be",
    "good technology is good design; good design is good. "
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
//setInterval(function(){changeQuote()}, 5000)
//setInterval(function(){spreadText()},20)



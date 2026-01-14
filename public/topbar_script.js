array = [   
    "Universal Basic Paraglider", 
    "reject externally imposed dreams",
    "don't be a tourist",
    "I am a wild horse",
    "Your extra reason can be a stupid one",
    "Statements of disbelief can never be proud",
    "your fourth grade self against the world",
    "we lack courage, not genius",
    "when my aura gets cut it bleeds",
    "I hope your words last longer than your plastic",
    "Save yourself! Go outside! Do something!",
    "There is no speed limit",
    "daylight to lamplight",
    "the above proposition is occasionally useful",
    "it is always the listener's burden to understand the outer message",
    "you don't have to pay someone to live intentionally",
    "refuse to pass over that which cannot be said",
    "Who's afraid of Virginia Woolf?",
    "vector love and paper chasers wring out leaner biotech dreamers",
    "in search of rare transmutations of money and time",
    "my heart is in the work",
    "there are only a few hard things",
    "spontaneity is all that matters",
    "Nobody was thinking about you anyways",
    "lying on top of a building the clouds looked no nearer than when I was lying on the street",
    "avoid fatal simplifications",
    "But why does that have to be your life?",
    "If harmony is not modulated by ritual, things will still go amiss",
    "existence alone is not enough",
    "everything is walking distance if I want it to be",
    "good technology is good design and good design is good. ",
    "no two people ever walk into the same room",
    "I've seen the future and I'm not going",
    "Imagine the clouds dripping",
    "Watch the sun until it becomes square",
    "I wish to remain who I am",
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
quoteArray = new Array(ll).fill(" ")
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
   //document.getElementById("quotes").innerText = quoteArray.join("")
}
}
changeQuote()
setInterval(function(){changeQuote()}, 5000)
setInterval(function(){spreadText()},40)

// Defer loading of topbar_script.js
window.onload = function() {
    const script = document.createElement('script');
    script.src = 'topbar_script.js';
    script.defer = true;
    document.head.appendChild(script);
};



array = [
"beneath the pavingstones-- the beach!!",
"we stand on the last promontory of the centuries...",
"in the caverns of order our hands shall forge bombs",
"there is no speed limit",
"stay changed",
"K.I.S.S.",
"form follows function",
"we lack courage, not genius",
"my friends are going to save the world",
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
setInterval(function(){changeQuote()}, 4000)
setInterval(function(){spreadText()},30)
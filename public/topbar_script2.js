function shuffleArray2(array) {
for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
}
k = Math.floor(Math.random() * array.length)
function changeQuote2(){
randomElement2 = array[k];
console.log(randomElement2);
k = k + 1;
k = k % array.length
randomElement2 = randomElement2.split("")
ll = randomElement2.length
quoteArray2 = new Array(ll).fill("□")
idxidx2 = 0;
idxArray2 = []
for (let i = 0; i < ll; i++) {
 idxArray2.push(i)
}
shuffleArray2(idxArray2)
}

function spreadText2(){
if(idxidx2 < idxArray2.length)
{
    thisIdx2 = idxArray2[idxidx2] 
   quoteArray2[thisIdx2] = randomElement2[thisIdx2]
   idxidx2 +=1
   document.getElementById("quotes2").innerText = quoteArray2.join("")
}
}
changeQuote2()
setInterval(function(){changeQuote2()}, 5000)
setInterval(function(){spreadText2()},20)

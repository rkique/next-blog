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

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('#daily-blog *');
    
    const loadMoreButton = document.getElementById('loadMore');
    let itemsToShow = 20; // Number of items to show initially
  
    // Show the initial items
    for (let i = 0; i < itemsToShow && i < items.length; i++) {
      items[i].style.display = 'block';
    }
  
    // Add click event to the button
    loadMoreButton.addEventListener('click', () => {
      const hiddenItems = Array.from(items).filter(item => item.style.display === 'none');
  
      if (hiddenItems.length === 0) {
        loadMoreButton.style.display = 'none'; // Hide the button if no more items to load
        return;
      }
  
      const itemsToReveal = Math.min(hiddenItems.length, itemsToShow);
  
      for (let i = 0; i < itemsToReveal; i++) {
        hiddenItems[i].style.display = 'block';
      }
  
      // Hide the button if no more items to load
      if (hiddenItems.length <= itemsToShow) {
        loadMoreButton.style.display = 'none';
      }
    });
  });


window.onload = function(){
    initToggle()
}


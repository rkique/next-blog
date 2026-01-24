console.log("book script running!") 

book_list = document.getElementById("book-list")

const reader = new FileReader()
reader.onload = function (event) {
    console.log(event.target.result); // the CSV content as string
  };
  
book_list.innerHTML = "<ul> <li>hello</li> <li>bog</li> </ul>"
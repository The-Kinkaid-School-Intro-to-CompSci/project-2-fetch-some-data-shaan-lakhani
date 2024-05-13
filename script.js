async function getBookData(){
    const baseURL = 'https://openlibrary.org/search.json?q=the+lord+of+the+rings'
    const response = await fetch(baseURL);
    const data = await response.json();
    return data;
}

async function getBookInfo(){
    console.log('getting book')

    let bookData = await getBookData();
    console.log("Book data:   ", bookData);
    console.log(bookData.docs[0])
}

function runProgram(){
    console.log('runProgram');
    //your code goes here
    let searchButton = document.querySelector("#searchinfo");
    searchButton.addEventListener(`click`, getBookInfo);

    // element.textContent = "hi"


}
document.addEventListener('DOMContentLoaded', runProgram);

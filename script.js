async function getBookData(){
    let searchBar = document.querySelector("#textInputBox");
    let searchBarContent = searchBar.value;
    console.log(searchBarContent);
    const baseURL = `https://openlibrary.org/search.json?q=${searchBarContent}`
    const response = await fetch(baseURL);
    const data = await response.json();
    return data;
}

async function getBookInfo(){
    console.log('getting book')

    let bookData = await getBookData();
    console.log("Book data:   ", bookData);
    let firstResult = bookData.docs[0];
    console.log(firstResult)
    console.log(firstResult.author_name);
    console.log(firstResult.title);
    console.log(firstResult.subject);
    console.log(firstResult.publish_date);
    console.log(firstResult.publish_place);
    console.log(firstResult.person);


    let authorNameSpan = document.querySelector("#author_name");
    authorNameSpan.textContent = firstResult.author_name;


    // let authorKeySpan = document.querySelector("#author_key");
    // authorKeySpan.textContent = "0L26320A, ";

    let titleSpan = document.querySelector("#title");
    titleSpan.textContent = firstResult.title;

    let subjectSpan = document.querySelector("#subject");
    subjectSpan.textContent = firstResult.subject;

    // let publishDateSpan = document.querySelector("#publish_date");
    // publishDateSpan.textContent = firstResult.publish_date;

    let publishPlaceSpan = document.querySelector("#publish_place");
    publishPlaceSpan.textContent = firstResult.publish_place;

    let personSpan = document.querySelector("#person");
    personSpan.textContent = firstResult.person;
}

function runProgram(){
    console.log('runProgram');
    let searchButton = document.querySelector("#searchinfo");
    searchButton.addEventListener(`click`, getBookInfo);


}


document.addEventListener('DOMContentLoaded', runProgram);





// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let divHeader = document.createElement("div");
    divHeader.setAttribute("class", "header");
        let spanDate = document.createElement("span");
        spanDate.setAttribute("class", "date");
        spanDate.textContent = "SMARCH 28, 2019";
        divHeader.appendChild(spanDate);

        let h1Title = document.createElement("h1");
        h1Title.textContent = "Lambda Times";
        divHeader.appendChild(h1Title);

        let spanTemp = document.createElement("span");
        spanTemp.setAttribute("class", "temp");
        spanTemp.textContent = "98°";
        divHeader.appendChild(spanTemp);

        return divHeader;
}

let mainDiv = document.querySelector(".header-container");
mainDiv.appendChild(Header());

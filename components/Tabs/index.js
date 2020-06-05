// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

let lambdaData = axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        let mainDiv = document.querySelector(".topics");
        console.log(response);
        
        for(let i = 0; i < response.data.topics.length; i++) {
            let divTab = document.createElement("div");
            divTab.setAttribute("class", "tab");
            divTab.textContent = `${response.data.topics[i]}`;
            mainDiv.appendChild(divTab);
        }
    })
    .catch( err => {
        console.log(error);
    });
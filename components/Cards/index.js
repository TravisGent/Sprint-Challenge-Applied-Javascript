// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: 
// https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
function cardMaker(data) {
    let divCard = document.createElement("div");
    divCard.setAttribute("class", "card");
        let divHeadline = document.createElement("div");
        divHeadline.setAttribute("class", "headline");
        divHeadline.textContent = `${data.headline}`;
        divCard.appendChild(divHeadline);

        let divAuthor = document.createElement("div");
        divAuthor.setAttribute("class", "author");
        divCard.appendChild(divAuthor);
            let divImgContainer = document.createElement("div");
            divImgContainer.setAttribute("class", "img-container");
            divAuthor.appendChild(divImgContainer);
                let imgAuthor = document.createElement("img");
                imgAuthor.src = `${data.authorPhoto}`;
                divImgContainer.appendChild(imgAuthor);

            let spanName = document.createElement("span");
            spanName.textContent = `By ${data.authorName}`;
            divAuthor.appendChild(spanName);
    return divCard;
}
// Use your function to create a card for each of the articles and add the card to the DOM.


axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        let cards = document.querySelector('.cards-container');
        let values = Object.values(response.data.articles);

        for(let i = 0; i < values.length; i++) {
            for(let x = 0; x < values[i].length; x++) {
                cards.appendChild(cardMaker(values[i][x]));
            }
        }
    })
    .catch(err => {
        console.log(err);
    });


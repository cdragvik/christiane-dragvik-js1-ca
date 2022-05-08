const detailsContainer = document.querySelector(".character-details");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://bobsburgers-api.herokuapp.com/characters/" + id;
const proxy = "https://noroffcors.herokuapp.com/";
const characterUrl = proxy + url;

async function details() {

    try {
        const response = await fetch(characterUrl); 
        const details = await response.json();

        console.log(details);

        newPageTitle = details.name;
        document.title = newPageTitle;

        detailsContainer.innerHTML = "";

        detailsContainer.innerHTML += `<h1>${details.name}</h1>
                                        <div class="characters">
                                        <h2>Character information</h2>
                                        <p>Gender: ${details.gender}</p>
                                        <p>Age: ${details.age}</p>
                                        <p>Hair color: ${details.hairColor}</p>
                                        <p>Occupation: ${details.occupation}</p>
                                        </div>`
    } catch(error) {
        detailsContainer.innerHTML = `<div class="error">Ups! An error has occured.</div>`;
    }

}
details();
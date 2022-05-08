const url = "https://bobsburgers-api.herokuapp.com/characters/";
const proxy = "https://noroffcors.herokuapp.com/";
const homeUrl = proxy + url;

const characterSection = document.querySelector(".character-section");

async function characters() {

    try {
        const response = await fetch(homeUrl); 
        const results = await response.json();

        characterSection.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            characterSection.innerHTML += `<div class="characters"> 
                                            <h2>${results[i].name}</h2>
                                            <p>Voiced by: ${results[i].voicedBy}</p>
                                            <p>First episode: ${results[i].firstEpisode}</p>
                                            <a href="details.html?id=${results[i].id}"><button>View more</button></a>
                                            </div>`
            if(i === 2) {
                break;
            }
        }
    } catch(error) {
        characterSection.innerHTML = `<div class="error">Ups! An error has occured</div>`;
    }
}
characters();


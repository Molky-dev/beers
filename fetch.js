
// View
const template = (beer) => `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="${beer.image_url}" class="card-img-top" alt="${beer.name}">
        <div class="card-body">
          <h5 class="card-title">${beer.name}</h5>
          <p class="card-text">${beer.description}</p>
        </div>
      </div>
    </div>
  `;


var beers;

// Controller
function displayBeers(beers) {
    const beerList = document.getElementById('beerList');
    beerList.innerHTML = beers.map(template).join('');
}

function filterBeers() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredBeers = beers.filter(beer => beer.name.toLowerCase().includes(searchInput));
    displayBeers(filteredBeers);
}

document.getElementById('searchInput').addEventListener('input', filterBeers);
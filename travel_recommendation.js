const searchInput = document.getElementById("searchInput");


const c = [];
const t = [];
const b = [];

function fetchData() {
    try {
        fetch("travel_recommendation_api.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            data.countries.forEach(country => c.push(country.name.toLowerCase()));
            data.temples.forEach(temple => t.push(temple.name.toLowerCase()));
            data.beaches.forEach(beach => b.push(beach.name.toLowerCase()));

            console.log(c);
            console.log(t);
            console.log(b);

            showData(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    } catch (error) {
        console.error('An error occurred while fetching data:', error);
    }
}

function showData(travels) {
    const searchText = searchInput.value.trim().toLowerCase();

    if (searchText === "country"||searchText =="countries") {
        const travels_div = document.getElementById("card");
        travels.countries.forEach(country => {
            country.cities.forEach(city => {
                const card = document.createElement('div');
                card.setAttribute("class", "container");
                const img = document.createElement('img');
                img.setAttribute("src", city.imageUrl);
                img.style.width = "30%";
                const h4 = document.createElement('h4');
                h4.textContent = city.name;
                h4.style.fontWeight = "bold";
                const p = document.createElement('p');
                p.textContent = city.description;

                card.appendChild(img);
                card.appendChild(h4);
                card.appendChild(p);

                travels_div.appendChild(card);
            });
        });
    }else if(searchText === "beach"||searchText=="beachs"){
        const travels_div = document.getElementById("card");
        travels.beaches.forEach(beache => {
            
                const card = document.createElement('div');
                card.setAttribute("class", "container");
                const img = document.createElement('img');
                img.setAttribute("src", beache.imageUrl);
                img.style.width = "30%";
                const h4 = document.createElement('h4');
                h4.textContent = beache.name;
                h4.style.fontWeight = "bold";
                const p = document.createElement('p');
                p.textContent = beache.description;

                card.appendChild(img);
                card.appendChild(h4);
                card.appendChild(p);

                travels_div.appendChild(card);
        
        });
    }else if(searchText === "temple"||searchText=="temples"){
        const travels_div = document.getElementById("card");
        travels.temples.forEach(temple => {
            
                const card = document.createElement('div');
                card.setAttribute("class", "container");
                const img = document.createElement('img');
                img.setAttribute("src", temple.imageUrl);
                img.style.width = "30%";
                const h4 = document.createElement('h4');
                h4.textContent = temple.name;
                h4.style.fontWeight = "bold";
                const p = document.createElement('p');
                p.textContent = temple.description;

                card.appendChild(img);
                card.appendChild(h4);
                card.appendChild(p);

                travels_div.appendChild(card);
        
        });
    }else{
        window.alert("Example of the keywords (temple/temples - beach/beachs - country/countries)");
    }
}



const search = document.getElementById("search");

const clear = document.getElementById("clear");

search.addEventListener('click',()=>{
    if(searchInput.value.trim().length!=0){
        fetchData();
    }else{
        window.alert("Please Enter destination or keyword")
    }
});

clear.addEventListener('click',()=>{
    console.log("Hello World");
    searchInput.value = "";
    const cards = document.getElementsByClassName("container");
 
    console.log(cards.length);

    for(let i =0;i<6;i++){
        document.querySelector(".container").remove();
    }

});


async function getMovies() {
    try {
        const searchTerm = document.getElementById("search").value;
        console.log(searchTerm);
        const url ="http://www.omdbapi.com/?apikey=e1eda312&s=" + searchTerm;
        const response = await fetch(url);
        const json = await response.json();
        console.log(JSON.stringify(json));
        const movieHolder = document.getElementById("movieHolder");

        // 1. Get the search term from the search box, 
        //          send a request to the ombd (USING YOUR API KEY)
        //          decode the response as JSON

        

        for (movie of json.Search) {
            let divContainer = document.createElement("div");
            divContainer.classList.add("card");
            let img = document.createElement("img");
            img.src = movie.Poster;
            img.width = 100
            let card = document.createElement("div");
            card.classList.add("container");
            let titleHeader = document.createElement("h3");
            titleHeader.textContent = movie.Title+": "+movie.Year;
            card.appendChild(titleHeader);
            divContainer.appendChild(img);
            divContainer.appendChild(card);
            movieHolder.appendChild(divContainer);

            //  Create a div to hold each image and title 
            //  Give the div the css class of CARD


            // Create an image element
            //      point it to the image from this movie            


            // Create a CONTAINER div to hold the title and year.
            // Give the CONTAINER div the style of container

            // Add the CONTAINER to the CARD
            // Add all the elements to the movieHolder element
        }


    }
    catch (error) {
        console.log(error)
    }
}
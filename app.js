// Get elements from the DOM
const locationNameElement = document.getElementById("locationName");
const funFactElement1 = document.getElementById("funFact1");
const funFactElement2 = document.getElementById("funFact2");
const funFactElement3 = document.getElementById("funFact3");

// Get genre buttons
const music = document.getElementById("music");
const film = document.getElementById("film");
const art = document.getElementById("art");
const sport = document.getElementById("sport");
const history = document.getElementById("history");
const food = document.getElementById("food");

// Fun facts data (now with genres and facts)
const funFacts = {
    "food": {
        "Brisbane": [
            "Brisbane is known for its great seafood, particularly prawns and barramundi!",
            "The city has a thriving café culture with many outdoor dining spots.",
            "You must try the famous ‘Moreton Bay Bugs’ in Brisbane's seafood markets."
        ],
        "Gold Coast": [
            "a",
            "b",
            "c"
        ],
        "Tokyo": [
            "a",
            "b",
            "c"
        ],
        // Add more locations...
    },
    "sport": {
        "Brisbane": [
            "Brisbane is home to the Brisbane Broncos, one of the most successful NRL teams in Australia.",
            "Brisbane hosts the annual ‘Brisbane International’ tennis tournament.",
            "Brisbane's Suncorp Stadium is one of the best rugby stadiums in the world."
        ],
        "Gold Coast": [
            "a",
            "b",
            "c"
        ],
        "Tokyo": [
            "a",
            "b",
            "c"
        ],
        // Add more locations...
    },
    "art": {
        "Brisbane": [
            "Brisbane's GOMA (Gallery of Modern Art) is one of the largest galleries of modern art in Australia.",
            "Street art is prominent in Brisbane, with various murals and installations around the city.",
            "The Queensland Art Gallery houses a world-class collection of Asian and Pacific art."
        ],
        "Gold Coast": [
            "a",
            "b",
            "c"
        ],
        "Tokyo": [
            "a",
            "b",
            "c"
        ],
        // Add more locations...
    }
};

const imageLocations =
{
    "Brisbane": [
        "https://t4.ftcdn.net/jpg/01/59/16/47/240_F_159164788_CERJL3ugdPEwzUyF8DUpIDNu06a8w1ny.jpg",
        "https://t3.ftcdn.net/jpg/01/92/46/46/240_F_192464679_8bEPfN2lcy8C2wJzXQQh03yDuvL2DmHB.jpg",
    ]
}

function getLocationAndFunFact(genre) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Optional: Use reverse geocoding to get the location name (city, country)
                fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
                    .then(response => response.json())
                    .then(data => {
                        const locationName = data.city || data.countryName || "Unknown location";
                        locationNameElement.textContent = locationName;

                        // Fetch fun facts based on selected genre and location
                        if (funFacts[genre] && funFacts[genre][locationName]) {
                            const facts = funFacts[genre][locationName];
                            funFactElement1.textContent = facts[0]; // Fact 1
                            funFactElement2.textContent = facts[1]; // Fact 2
                            funFactElement3.textContent = facts[2]; // Fact 3
                        } else {
                            funFactElement1.textContent = "Sorry, no facts available for this location and genre!";
                            funFactElement2.textContent = "";
                            funFactElement3.textContent = "";
                        }

                        // Show the location-specific image (if available)
                        if (imageLocations[locationName]) {
                            // Set the image src dynamically
                            document.getElementById("imageLocations").src = imageLocations[locationName][0]; // Use the first image URL
                        } else {
                            // If no image is available for the location, hide the image container or show a default image
                            document.getElementById("imageLocations").src = "";
                        }
                    })
                    .catch(error => {
                        locationNameElement.textContent = "Unable to get location name";
                        funFactElement1.textContent = "Sorry, no fun facts available.";
                        funFactElement2.textContent = "";
                        funFactElement3.textContent = "";
                        document.getElementById("imageLocations").src = ""; // Clear the image if there's an error
                        console.error("Error fetching location name:", error);
                    });
            },
            function(error) {
                console.error("Geolocation error:", error);
                locationNameElement.textContent = "Unable to retrieve your location.";
                funFactElement1.textContent = "Sorry, no fun facts available.";
                funFactElement2.textContent = "";
                funFactElement3.textContent = "";
                document.getElementById("imageLocations").src = ""; // Clear the image if there's an error
            }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}



// Event listeners for genre selection buttons
musicBtn.addEventListener("click", function() {
    getLocationAndFunFact("music")
});
filmBtn.addEventListener("click", function() {
    getLocationAndFunFact("film")
});
artBtn.addEventListener("click", function() {
    getLocationAndFunFact("art");
});
sportBtn.addEventListener("click", function() {
    getLocationAndFunFact("sport");
});
historyBtn.addEventListener("click", function() {
    getLocationAndFunFact("history");
});
foodBtn.addEventListener("click", function() {
    getLocationAndFunFact("food");
});



// Automatically fetch the location and fun facts when the page loads (default genre: food)
window.onload = function() {
    getLocationAndFunFact("food");
};
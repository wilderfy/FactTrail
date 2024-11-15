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
            "The Gold Coast is famous for its fresh seafood, including Moreton Bay bugs and local prawns.",
            "The region is known for fusion dishes combining Asian and Australian flavors, such as soft-shell crab burgers.",
            "You’ll find many locally grown products like macadamia nuts and fresh produce in Gold Coast markets."
        ],
        "Sunshine Coast": [
            "The Sunshine Coast is known for its fresh, local seafood, especially prawns and oysters.",
            "The region produces high-quality tropical fruits like avocados and bananas.",
            "Farmers' markets on the Sunshine Coast offer local organic produce, artisan cheeses, and unique food items."
        ],
        "Cairns": [
            "Cairns is famous for tropical fruits like mangos, pineapples, and lychees.",
            "The city has a rich seafood culture, with barramundi and mud crab being local favorites.",
            "Cairns also offers delicious tropical drinks, including fresh fruit juices and cocktails featuring local rum."
        ],
        "Townsville": [
            "Townsville’s seafood scene includes freshly caught fish like barramundi and rock lobster.",
            "The region produces a variety of tropical fruits and vegetables, such as sweet potatoes and bananas.",
            "You can try unique local delicacies like saltwater crocodile and kangaroo meat in Townsville’s restaurants."
        ],
        "Mackay": [
            "Mackay is known for its sugar cane production, with many local treats made from sugar.",
            "The region is home to great seafood, including prawns and barramundi.",
            "Mackay has a vibrant café scene, offering local and international dishes made with fresh ingredients."
        ],
        "Rockhampton": [
            "Rockhampton is famous for being the ‘Beef Capital’ of Australia, offering top-quality steaks and beef dishes.",
            "Local markets in Rockhampton sell fresh tropical fruits, including papaya and pineapples.",
            "Rockhampton also serves delicious seafood, with mud crab and prawns among the top picks."
        ],
        "Gladstone": [
            "Gladstone offers some of the freshest seafood, including prawns, mud crabs, and barramundi.",
            "The region is known for its tropical fruits like mangoes, pineapples, and lychees.",
            "Gladstone is also home to local vineyards, offering fine wines and fresh produce."
        ],
        "Bundaberg": [
            "Bundaberg is famous for its sugar cane and the iconic Bundaberg Rum, made locally.",
            "The region is known for fresh produce, including tomatoes, avocados, and citrus fruits.",
            "Bundaberg also produces delicious tropical fruits like lychees and pawpaw."
        ],
        "Toowoomba": [
            "Toowoomba is known for its vibrant farmers' markets, offering fresh, local produce.",
            "The region is famous for its delicious local cheeses and artisanal products.",
            "Toowoomba's cool climate allows for a variety of gourmet food, including fresh strawberries and herbs."
        ]
    },
    "sport": {
        "Brisbane": [
                "The 1982 Commonwealth Games were held in Brisbane.",
                "Brisbane hosts the annual 'Brisbane International' tennis tournament.",
                "Brisbane's Suncorp Stadium is one of the best rugby stadiums in the world."
        ],
        "Gold Coast": [
                "The Gold Coast hosted the 2018 Commonwealth Games, leaving behind top-tier sporting facilities.",
                "Known for its surf culture, the Gold Coast hosts major events like the World Surf League competitions at Snapper Rocks.",
                "The Gold Coast Suns, part of the Australian Football League (AFL), represent the city in the national competition, playing at Metricon Stadium in Carrara."
        ],
        "Sunshine Coast": [
                "The Sunshine Coast is known for its surfing culture, with beaches like Noosa attracting world-class surfers.",
                "The region also hosts the annual Sunshine Coast Marathon, attracting runners from all over the world.",
                "The University of the Sunshine Coast is home to a strong sporting community, offering sports like rugby, soccer, and netball."
        ],
        "Cairns": [
                "Cairns is home to the Cairns Taipans, a professional basketball team in the National Basketball League (NBL).",
                "The region is a hotspot for adventure sports, including white-water rafting on the Tully River.",
                "Cairns also hosts the annual Ironman 70.3 race, attracting triathletes from around the globe."
        ],
        "Townsville": [
                "Townsville is home to the North Queensland Cowboys, a team in the National Rugby League (NRL).",
                "The city also hosts the Townsville 400, an annual V8 Supercar race.",
                "Townsville's Queensland Country Bank Stadium is a key venue for both rugby and soccer events."
        ],
        "Mackay": [
                "Mackay is known for its strong rugby league community and hosts several regional competitions.",
                "The city is also home to the Mackay Cutters, a team in the Queensland Cup rugby league competition.",
                "Mackay is a popular destination for outdoor sports like fishing, boating, and water skiing."
        ],
        "Rockhampton": [
                "Rockhampton is known as the 'Beef Capital of Australia' and hosts the annual Beef Australia event, one of the largest beef expos in the world.",
                "The city has a strong rugby league presence, with teams like the Rockhampton Leagues Club team competing in the Queensland Rugby League.",
                "Rockhampton also has a vibrant equestrian sports community, with events like the Rockhampton Show."
        ],
        "Gladstone": [
                "Gladstone is known for its outdoor adventure sports, including kayaking and rock climbing.",
                "The city is also home to the Gladstone Ports Corporation which organizes the annual Gladstone Harbour Festival, including various water sports.",
                "Gladstone hosts local touch football and soccer competitions, contributing to its growing sporting culture."
        ],
        "Bundaberg": [
                "Bundaberg is known for its community sports culture, with a variety of amateur competitions in sports like soccer, cricket, and rugby.",
                "The city is also home to Bundaberg's Surf Life Saving Club, offering excellent water sports opportunities.",
                "Bundaberg hosts the annual Bundaberg Cup, a major event in the local racing calendar."
        ],
        "Toowoomba": [
                "Toowoomba is famous for its extensive regional rugby union competitions and boasts a strong local team.",
                "The city hosts the Toowoomba Cup, a major horse racing event drawing crowds from around Queensland.",
                "Toowoomba is also a popular destination for athletics, with its annual Carnival of Flowers attracting participants in various sports."
        ]
    },
    "art": {
        "Brisbane": [
            "Brisbane's GOMA (Gallery of Modern Art) is one of the largest galleries of modern art in Australia.",
            "Street art is prominent in Brisbane, with various murals and installations around the city.",
            "The Queensland Art Gallery houses a world-class collection of Asian and Pacific art."
        ],
        "Gold Coast": [
            "The Gold Coast is known for its vibrant public art scene, including murals and large-scale sculptures.",
            "The Gold Coast City Gallery hosts contemporary art exhibitions from both local and international artists.",
            "The 'Bleach Festival' celebrates diverse artistic expressions, including live performance, art installations, and visual arts."
        ],
        "Sunshine Coast": [
            "The Sunshine Coast has a strong arts and crafts culture, with local art studios offering workshops in everything from painting to pottery.",
            "Noosa Regional Gallery is a key destination for art lovers, showcasing contemporary works by local and national artists.",
            "The Sunshine Coast Art Prize is an annual event that attracts artists from around Australia, showcasing a wide variety of contemporary artworks."
        ],
        "Cairns": [
            "Cairns is home to the **Cairns Art Gallery**, which exhibits a range of works from local Aboriginal and Torres Strait Islander artists.",
            "The city hosts the **Cairns Indigenous Art Fair**, celebrating traditional and contemporary Indigenous art.",
            "The **Cairns Regional Gallery** is one of Queensland’s most prominent regional galleries, showcasing a variety of art styles and exhibitions."
        ],
        "Townsville": [
            "The **Perc Tucker Regional Gallery** in Townsville houses a collection of historical and contemporary Australian art.",
            "Townsville is home to **The Strand Ephemera**, an annual outdoor exhibition that combines art and the stunning views of Magnetic Island.",
            "Street art can be found in Townsville’s urban spaces, with murals brightening the city’s walls and buildings."
        ],
        "Mackay": [
            "Mackay’s **Artspace Mackay** hosts rotating exhibitions of local, national, and international artists.",
            "The **Mackay Region Cultural Precinct** is an important cultural hub, offering a venue for artists to showcase their work.",
            "The region is known for its connection to tropical and environmental art, with many works inspired by the surrounding landscapes."
        ],
        "Rockhampton": [
            "The **Rockhampton Art Gallery** features a significant collection of Australian art, with a focus on contemporary works.",
            "Rockhampton is known for its **Botanic Gardens and Zoo**, where you can find art installations integrated into the natural surroundings.",
            "The city hosts **The River Festival**, which often includes local art exhibitions and installations."
        ],
        "Gladstone": [
            "Gladstone’s **Gladstone Regional Art Gallery and Museum** features a combination of visual art exhibitions and historical displays.",
            "Gladstone has a rich history of **Indigenous art**, with local artists often showcasing their work at the **Miriam Vale Art Gallery**.",
            "The **Gladstone Harbour Festival** regularly includes art performances and displays from local artists."
        ],
        "Bundaberg": [
            "The **Bundaberg Regional Art Gallery** is known for showcasing diverse contemporary art from both local and national artists.",
            "Bundaberg's **Mon Repos Turtle Centre** is a site for environmental art, where works often draw inspiration from the region’s turtle conservation efforts.",
            "The **Bundaberg Arts Festival** highlights local talent, including visual artists, musicians, and performers."
        ],
        "Toowoomba": [
            "Toowoomba's **Regional Art Gallery** is renowned for its collection of Australian artworks, including significant pieces from the 19th and 20th centuries.",
            "The **Toowoomba Carnival of Flowers** features not only floral displays but also art exhibitions celebrating the region’s rich cultural heritage.",
            "Street art has become an important aspect of Toowoomba’s artistic expression, with murals decorating the city’s public spaces."
        ]
    },
    "music": {
        "Brisbane": [
            "Brisbane is known for its lively music scene, with venues like The Tivoli and The Fortitude Music Hall hosting local and international acts.",
            "The annual Brisbane Festival includes a major music program featuring orchestras, indie bands, and classical performances.",
            "Brisbane hosts the Valley Fiesta, a music festival celebrating the city's vibrant music culture, from rock to electronic."
        ],
        "Gold Coast": [
            "The Gold Coast has a thriving live music scene, with popular venues like The Soundlounge and Miami Marketta.",
            "The city is home to the Gold Coast Music Awards, an event celebrating the best of local talent.",
            "Surfers Paradise hosts the annual 'Sounds of the 80s' festival, featuring live performances of classic hits from the decade."
        ],
        "Sunshine Coast": [
            "The Sunshine Coast boasts several annual music festivals, including the Caloundra Music Festival, which attracts international and local performers.",
            "Local venues like The Imperial Hotel offer a stage for upcoming indie and folk artists.",
            "The region is home to a strong community of musicians and hosts regular jam nights, fostering a creative music scene."
        ],
        "Cairns": [
            "Cairns is known for its eclectic music scene, from local jazz bands to international touring artists.",
            "The annual Cairns Festival features a variety of live music performances across genres like blues, reggae, and classical.",
            "The city is home to the Cairns Indigenous Art Fair, which includes music performances highlighting traditional and contemporary Indigenous sounds."
        ],
        "Townsville": [
            "Townsville hosts the North Queensland Festival, which includes a diverse range of live music performances, from rock to classical.",
            "The city is known for its vibrant local music scene, with several pubs and clubs offering live performances by local artists.",
            "Townsville is home to the Queensland Symphony Orchestra’s regional performances."
        ],
        "Mackay": [
            "Mackay has a growing music scene with local bands performing at festivals like the Mackay Festival of the Arts.",
            "The city hosts the annual 'Mackay Music Festival,' celebrating local talent in a variety of genres.",
            "Mackay is also home to the CQUniversity Orchestra, which offers classical music performances to the community."
        ],
        "Rockhampton": [
            "Rockhampton is home to a thriving local music scene with regular performances by local bands and artists.",
            "The city hosts the Rockhampton River Festival, which features live music from a mix of genres, including indie and folk.",
            "The Rockhampton Youth Orchestra gives local young musicians the opportunity to perform classical music in the city."
        ],
        "Gladstone": [
            "Gladstone hosts the Gladstone Harbour Festival, which includes live music performances from local and national acts.",
            "The city has a growing live music scene, with performances taking place at various community and cultural events.",
            "Gladstone also hosts local music competitions that allow young and aspiring musicians to showcase their talents."
        ],
        "Bundaberg": [
            "Bundaberg is known for its annual 'Bundaberg Music Festival,' showcasing local talent and offering a variety of music genres.",
            "The region has a strong country music following, with several events dedicated to this genre, including the Bundaberg Country Music Muster.",
            "Bundaberg hosts performances by local bands and musicians at its public events and community gatherings."
        ],
        "Toowoomba": [
            "Toowoomba is home to the annual Toowoomba Carnival of Flowers, which features a variety of live music performances.",
            "The city’s arts scene includes music performances across genres, with venues like The Empire Theatre hosting concerts and shows.",
            "Toowoomba also offers a strong classical music presence, with performances by the Toowoomba Choral Society and other local orchestras."
        ]
    },
    "film": {
        "Brisbane": [
            "Brisbane is home to the annual Brisbane International Film Festival (BIFF), showcasing films from around the world.",
            "The Queensland Film and Television Production Fund is based in Brisbane, supporting local filmmakers.",
            "Brisbane's The Tivoli theatre regularly hosts classic film screenings and independent films, contributing to the city's rich cinema culture."
        ],
        "Gold Coast": [
            "The Gold Coast has been a filming location for major Hollywood films, including parts of 'Thor: Ragnarok' and 'Pirates of the Caribbean: Dead Men Tell No Tales'.",
            "The Gold Coast Film Festival celebrates independent films, attracting filmmakers and actors from around the globe.",
            "The Village Roadshow Studios in the Gold Coast is one of Australia’s largest film production facilities, hosting international film productions."
        ],
        "Sunshine Coast": [
            "The Sunshine Coast has served as a backdrop for Australian films like 'The Chronicles of Narnia: The Voyage of the Dawn Treader'.",
            "The Sunshine Coast International Film Festival highlights local talent and international films in an intimate coastal setting.",
            "The region’s scenic beaches and hinterlands often appear in films and TV series for their natural beauty."
        ],
        "Cairns": [
            "Cairns is a popular location for documentary filmmakers, particularly those covering the Great Barrier Reef and surrounding natural landscapes.",
            "The Cairns Indigenous Art Fair often includes film screenings that celebrate Indigenous storytelling through visual media.",
            "Cairns hosts the Cairns Film Festival, a small but growing event that focuses on local filmmakers."
        ],
        "Townsville": [
            "Townsville hosts the North Queensland Festival, which includes live music performances and a film component.",
            "The city has a vibrant local film community, with many films shot in the area showcasing its tropical landscapes.",
            "Townsville is also home to the Townsville International Film Festival, which promotes independent film projects."
        ],
        "Mackay": [
            "Mackay has its own film festival, the Mackay Film Festival, celebrating local and independent filmmaking.",
            "The region’s natural beauty and tropical landscapes are often featured in documentaries and TV series filmed in the area.",
            "Mackay also has a growing independent film community, with local filmmakers producing and showcasing short films."
        ],
        "Rockhampton": [
            "Rockhampton is known for its local film industry, with filmmakers often highlighting regional stories and culture.",
            "The Rockhampton Film Festival promotes independent films and supports emerging filmmakers in the area.",
            "The region’s proximity to natural landmarks makes it an ideal location for outdoor and adventure documentaries."
        ],
        "Gladstone": [
            "Gladstone hosts the Gladstone Film Festival, an event that celebrates both local and international filmmakers.",
            "The city offers diverse filming locations, from its industrial port to serene beaches, making it ideal for a variety of film genres.",
            "Gladstone’s film industry is growing, with a focus on capturing regional stories and environmental themes."
        ],
        "Bundaberg": [
            "Bundaberg is known for local films that highlight the agricultural industry, especially sugarcane and rum production.",
            "The Bundaberg Regional Art Gallery regularly hosts screenings of independent films created by local filmmakers.",
            "Bundaberg’s historic architecture and sugarcane fields make it a unique filming location for documentaries and historical films."
        ],
        "Toowoomba": [
            "Toowoomba’s Carnival of Flowers has inspired several short films and documentaries focusing on the region’s natural beauty.",
            "The Toowoomba Film Festival provides a platform for independent filmmakers to showcase their works in various genres.",
            "Toowoomba’s gardens and historic buildings often appear in romantic dramas and period films."
        ]
    },
    "history": {
        "Brisbane": [
            "Brisbane was originally established as a penal colony in 1824, making it one of the oldest cities in Queensland.",
            "The city was named after the Brisbane River, which itself was named after Sir Thomas Brisbane, a British officer and Governor of New South Wales.",
            "Brisbane was the site of the **Brisbane General Strike of 1912**, a major event in Australian labor history that significantly influenced industrial relations."
        ],
        "Gold Coast": [
            "The Gold Coast was originally inhabited by the Yugambeh people before European settlement began in the mid-1800s.",
            "The area became popular as a holiday destination in the 1920s, and its tourism industry rapidly grew post-World War II.",
            "The Gold Coast is also home to **Q1 Tower**, which at the time of its completion in 2005 was the tallest residential building in the Southern Hemisphere."
        ],
        "Sunshine Coast": [
            "The Sunshine Coast was once a major timber-producing area before becoming a popular destination for tourists and retirees in the late 20th century.",
            "The region was originally known for its agricultural activities, including sugar cane farming and dairy production.",
            "Sunshine Coast was named for its ideal weather and climate, with the region’s first tourist attractions established in the 1930s."
        ],
        "Cairns": [
            "Cairns was established in 1876, and named after the Queensland Governor, William Cairns.",
            "The region's development accelerated with the establishment of a port in the late 1800s, and Cairns became a key point for export in northern Australia.",
            "Cairns played a significant role in the development of tourism to the Great Barrier Reef, becoming the primary gateway for reef tourism in the 20th century."
        ],
        "Townsville": [
            "Townsville was established in 1864 as a port and grew rapidly due to its strategic location and proximity to the resource-rich hinterlands.",
            "It played a pivotal role in Australia's military history, particularly during World War II when it was an important base for Allied forces.",
            "Townsville became a city in 1903 and has since become one of the largest urban areas in northern Queensland."
        ],
        "Mackay": [
            "Mackay was settled in the 1860s, and named after John Mackay, a Scottish explorer.",
            "The city's economy was historically centered on sugar production, with Mackay often referred to as the 'Sugar Capital of Australia'.",
            "Mackay is home to the **Mackay Regional Botanic Gardens**, which is a historical site for indigenous plant life."
        ],
        "Rockhampton": [
            "Rockhampton was established in 1858 and has long been known as the 'Beef Capital of Australia' due to its extensive cattle farming industry.",
            "The city was once a significant gold mining center, particularly during the 1850s and 1860s.",
            "Rockhampton’s early settlers made it a major shipping port, and it became the first inland city in Queensland to be linked to the national railway system in 1888."
        ],
        "Gladstone": [
            "Gladstone's history began as a penal settlement, but it grew into an important port town after its establishment in 1853.",
            "The city became a key location for the development of Queensland's mining and industrial sectors, especially for bauxite, coal, and liquefied natural gas.",
            "Gladstone is also home to the historic **Gladstone Harbour**, which has been an important location for shipping and trade since the mid-1800s."
        ],
        "Bundaberg": [
            "Bundaberg is known as the birthplace of **Bundaberg Rum**, first produced in 1888, which is a staple of Australian distillery culture.",
            "The region was originally established in the late 1800s as a major sugar-producing area and is still a key hub for the sugar industry.",
            "Bundaberg has a rich Indigenous history, with the Gooreng Gooreng people being the traditional owners of the land before European settlement."
        ],
        "Toowoomba": [
            "Toowoomba was founded in 1850 and is one of the oldest cities in Queensland.",
            "The city is renowned for its historic gardens and was known as the 'Garden City' due to its beautiful parks and green spaces.",
            "Toowoomba played an important role in the development of Queensland's agricultural sector, especially with its proximity to grain-producing areas."
        ]
    }
};

const imageLocations =
{
    "Brisbane": [
        "https://t4.ftcdn.net/jpg/01/59/16/47/240_F_159164788_CERJL3ugdPEwzUyF8DUpIDNu06a8w1ny.jpg"
    ],
    "Gold Coast": [
        "https://t3.ftcdn.net/jpg/02/67/60/42/240_F_267604229_qs3Y7rad3o2GzkjVYPCCugczSptntCQa.jpg"
    ],
    "Sunshine Coast": [
        "https://t3.ftcdn.net/jpg/07/49/69/16/240_F_749691604_Zox9yO0UhE5dUQo8YtteB28xJ0jU7Esd.jpg"
    ],
    "Cairns": [
        "https://t3.ftcdn.net/jpg/02/06/83/70/240_F_206837022_ZT8YXQCIXRBMwOdd8ODBSzB64fJYi8X7.jpg"
    ],
    "Townsville": [
        "https://as1.ftcdn.net/v2/jpg/04/40/19/80/1000_F_440198082_1gZPyVFPHfQzO1b3A3K7uph7ROOcJS0B.jpg"
    ],
    "Mackay": [
        "https://as2.ftcdn.net/v2/jpg/08/15/07/89/1000_F_815078938_HQkq9XuSSf6LcZLETPBhiknGOtgrYUrD.jpg"

    ],
    "Rockhampton": [
        "https://upload.wikimedia.org/wikipedia/commons/b/bd/Rockhampton_1.jpg"

    ],
    "Gladstone": [
        "https://upload.wikimedia.org/wikipedia/commons/3/37/Gladstone_Landscape.jpg"
    ],
    "Bundaberg": [
        "https://as2.ftcdn.net/v2/jpg/07/46/03/21/1000_F_746032181_4FJJMm1yQJLT0FusMx7v8YxuduCFoN9q.jpg"

    ],
    "Toowoomba": [
        "https://as2.ftcdn.net/v2/jpg/05/78/58/67/1000_F_578586737_lTaKrupFBhsXttyS8JGoWqiINloP4OmM.jpg"

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

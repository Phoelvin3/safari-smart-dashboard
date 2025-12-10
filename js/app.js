// ====================================================================
// SAFARI-SMART: ADVANCED LIVE-DATA TOURISM ASSISTANT (js/app.js)
// FINAL YEAR PROJECT CODE - FULLY COMBINED SCRIPT
// ====================================================================

// --- 1. CONFIGURATION (!!! UPDATE THESE PLACEHOLDERS !!!) ---
const OPENWEATHER_API_KEY = "04b361566fd69d72824efb27e1110382"; // Get free key from openweathermap.org
const EXCHANGERATE_API_KEY = "e9af448503b816dc05d5e0c6"; // Get free key from exchangerate-api.com
const BOOKING_WHATSAPP_NUMBER = "254745964295"; // Your phone number (e.g., 254722123456)

// Global map variables


// ====================================================================
// A. SIMULATED DATABASE (20+ COMPLEX TOUR PACKAGES)
// ====================================================================
const toursData = [
    {
        id: 1, name: "Kericho Tea Highland Tour", city: "Kericho", price: 5000, image: "assets/kericho.jpeg", 
        description: "A serene tour of lush tea plantations and factory visits.", duration: "1 Day",
        lat: -0.3703, lng: 35.3621, elevation: 2000, category: "Cultural", amenities: ["FullBoard"], weatherStatus: '' 
    },
    {
        id: 2, name: "Mombasa South Coast Getaway", city: "Mombasa", price: 18500, image: "mombasa.jpeg", 
        description: "3-day package including Diani beach access and dolphin viewing.", duration: "3 Days",
        lat: -4.0547, lng: 39.6636, elevation: 15, category: "Beach", amenities: ["WiFi", "Pool"], weatherStatus: '' 
    },
    {
        id: 3, name: "Rift Valley Hiking Expedition", city: "Nakuru", price: 9200, image: "rift valley.jpeg", 
        description: "2-day hike around Menengai Crater and Hell's Gate National Park.", duration: "2 Days",
        lat: -0.3031, lng: 36.0800, elevation: 1800, category: "Hiking", amenities: [], weatherStatus: '' 
    },
    {
        id: 4, name: "Maasai Mara Great Migration", city: "Masai Mara", price: 55000, image: "maasaimara.jpeg", 
        description: "5-day luxury safari to witness the world-famous Great Migration.", duration: "5 Days",
        lat: -1.4583, lng: 35.5306, elevation: 1500, category: "Safari", amenities: ["WiFi", "FullBoard"], weatherStatus: '' 
    },
    {
        id: 5, name: "Amboseli Elephant Paradise", city: "Amboseli", price: 38000, image: "Amboseli.jpeg", 
        description: "3-day safari with stunning views of Mt. Kilimanjaro and huge elephant herds.", duration: "3 Days",
        lat: -2.6587, lng: 37.2450, elevation: 1100, category: "Safari", amenities: ["FullBoard", "EVCharging"], weatherStatus: '' 
    },
    {
        id: 6, name: "Lamu Island Cultural Retreat", city: "Lamu", price: 15000, image: "Lamu.jpeg", 
        description: "A 2-day historical journey through Swahili architecture and heritage.", duration: "2 Days",
        lat: -2.2687, lng: 40.9022, elevation: 5, category: "Cultural", amenities: ["WiFi"], weatherStatus: '' 
    },
    {
        id: 7, name: "Diani Beach Diving Package", city: "Diani", price: 22000, image: "diani.jpeg", 
        description: "3-day diving course and ocean exploration off the beautiful Diani coast.", duration: "3 Days",
        lat: -4.2750, lng: 39.5750, elevation: 20, category: "Beach", amenities: ["Pool"], weatherStatus: '' 
    },
    {
        id: 8, name: "Mount Kenya Summit Trek", city: "Nanyuki", price: 45000, image: "mt kenya.jpeg", 
        description: "A challenging 5-day trek to the highest point in Kenya, Lenana Peak.", duration: "5 Days",
        lat: 0.1700, lng: 37.0600, elevation: 3500, category: "Hiking", amenities: ["FullBoard"], weatherStatus: '' 
    },
    {
        id: 9, name: "Nairobi City Museum & Park Tour", city: "Nairobi", price: 7500, image: "nairobimuseum.webp", 
        description: "A 1-day exploration of the city's highlights and the National Museum.", duration: "1 Day",
        lat: -1.2864, lng: 36.8172, elevation: 1700, category: "City", amenities: ["WiFi", "EVCharging"], weatherStatus: '' 
    },
    {
        id: 10, name: "Tsavo East Wilderness Safari", city: "Voi", price: 32000, image: "tsavo.jpeg", 
        description: "3-day visit to the 'Theatre of the Wild', famous for red elephants.", duration: "3 Days",
        lat: -3.3750, lng: 39.2333, elevation: 600, category: "Safari", amenities: ["FullBoard"], weatherStatus: '' 
    },
    {
        id: 11, name: "Lake Naivasha Boat Safari", city: "Naivasha", price: 11000, image: "lakenaivasha.jpeg", 
        description: "2-day relaxing trip with boat rides, bird watching, and Crescent Island.", duration: "2 Days",
        lat: -0.7167, lng: 36.4333, elevation: 1890, category: "Safari", amenities: ["Pool"], weatherStatus: '' 
    },
    {
        id: 12, name: "Watamu Turtle Bay Escape", city: "Watamu", price: 25000, image: "watamu.jpeg", 
        description: "3-day conservation and marine park tour, perfect for snorkeling.", duration: "3 Days",
        lat: -3.3500, lng: 40.0167, elevation: 10, category: "Beach", amenities: ["WiFi", "Pool"], weatherStatus: '' 
    },
    {
        id: 13, name: "Eldoret High Altitude Training", city: "Eldoret", price: 14000, image: "eldoret.jpeg", 
        description: "2-day trip focused on the region's athletic heritage and training camps.", duration: "2 Days",
        lat: 0.5167, lng: 35.2833, elevation: 2100, category: "City", amenities: ["EVCharging"], weatherStatus: '' 
    },
    {
        id: 14, name: "Aberdare Moorlands Hike", city: "Nyeri", price: 16000, image: "Abardare.jpeg", 
        description: "2-day guided trek through the scenic Aberdare National Park.", duration: "2 Days",
        lat: -0.4167, lng: 36.9500, elevation: 2800, category: "Hiking", amenities: [], weatherStatus: '' 
    },
    {
        id: 15, name: "Shimba Hills Rainforest Safari", city: "Kwale", price: 28000, image: "simbahills.jpg", 
        description: "3-day safari famous for the Sable Antelope and lush coastal rainforest.", duration: "3 Days",
        lat: -4.1000, lng: 39.4000, elevation: 400, category: "Safari", amenities: ["FullBoard"], weatherStatus: '' 
    },
    {
        id: 16, name: "Kisumu Lakeside Culture", city: "Kisumu", price: 10500, image: "kisumulakeside.jpeg", 
        description: "2-day trip to Lake Victoria, Dunga Beach, and Kisumu Museum.", duration: "2 Days",
        lat: -0.1022, lng: 34.7617, elevation: 1130, category: "Cultural", amenities: ["WiFi"], weatherStatus: '' 
    },
    {
        id: 17, name: "Malindi Marine Park Escape", city: "Malindi", price: 19000, image: "Malindi.jpg", 
        description: "3-day water sports, coral viewing, and historical town exploration.", duration: "3 Days",
        lat: -3.2167, lng: 40.1167, elevation: 10, category: "Beach", amenities: ["Pool", "WiFi"], weatherStatus: '' 
    },
    {
        id: 18, name: "Nairobi National Park Day Tour", city: "Nairobi", price: 8900, image: "Nairobinational.jpeg", 
        description: "1-day game drive in the only capital city with a national park.", duration: "1 Day",
        lat: -1.3700, lng: 36.8850, elevation: 1600, category: "Safari", amenities: ["EVCharging"], weatherStatus: '' 
    },
    {
        id: 19, name: "Kakamega Forest Canopy Walk", city: "Kakamega", price: 12500, image: "kakamega.jpeg", 
        description: "2-day visit to Kenya's only tropical rainforest, including a canopy walk.", duration: "2 Days",
        lat: 0.2833, lng: 34.7500, elevation: 1560, category: "Hiking", amenities: ["FullBoard"], weatherStatus: '' 
    },
    {
        id: 20, name: "Bamburi Nature Trail Visit", city: "Bamburi", price: 6500, image: "bamburi.jpeg", 
        description: "1-day trip to the rehabilitated quarry, now a vibrant ecosystem.", duration: "1 Day",
        lat: -3.9833, lng: 39.7500, elevation: 20, category: "Cultural", amenities: ["WiFi"], weatherStatus: '' 
    }
];


// ====================================================================
// B. LIVE CURRENCY CONVERTER
// ====================================================================
async function fetchCurrencyRate() {
    const url = `https://v6.exchangerate-api.com/v6/${EXCHANGERATE_API_KEY}/latest/USD`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === 'success') {
            const kesRate = data.conversion_rates.KES;
            const formattedRate = kesRate.toFixed(2);
            document.getElementById("currency-display").innerHTML = 
                `1 USD = ${formattedRate} KES`;
        } else {
            document.getElementById("currency-display").innerText = "Error fetching rates.";
        }
    } catch (error) {
        console.error("Error fetching currency data:", error);
        document.getElementById("currency-display").innerText = "Loading failed.";
    }
}


// ====================================================================
// C. GOOGLE MAPS INTEGRATION
// NOTE: This function is called by the Google Maps script in destinations.html
// ====================================================================
function initMap() {
    const kenyaCenter = { lat: -1.286389, lng: 36.817223 }; 
    
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: kenyaCenter,
        mapId: 'DEMO_MAP_ID',
        mapTypeControl: false,
        streetViewControl: false
    });
    
    // Rerun search to load markers if destinations page loaded before maps script
    if (document.getElementById('tour-listings')) {
        handleSearch();
    }
}

function addMarkersToMap(data) {
    // 1. Clear existing markers
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    if (!map) return; 
    
    // 2. Add a new marker for each tour in the filtered data
    data.forEach(tour => {
        const isWarning = tour.weatherStatus.includes('WARNING');
        
        const marker = new google.maps.Marker({
            position: { lat: tour.lat, lng: tour.lng },
            map: map,
            title: tour.name,
            icon: {
                // Use a different color/pin for weather warnings
                url: isWarning ? 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' : 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
            }
        });

        // Add infowindow for interactivity
        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${tour.name} (${tour.city})</h3>
                      <p>${tour.description}</p>
                      <p><strong>Price:</strong> KSH ${tour.price.toLocaleString()}</p>
                      <p><strong>Weather:</strong> ${tour.weatherStatus || 'Loading...'}</p>
                      <button onclick="bookNow('${tour.name}', ${tour.id})" style="background-color: #007bff; color: white; padding: 5px 10px; border: none; border-radius: 3px; cursor: pointer;">Book Now</button>`
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
        
        markers.push(marker);
    });
}


// ====================================================================
// D. LIVE WEATHER INTEGRATION (Stores Status)
// ====================================================================
async function fetchAndDisplayWeather(tourId, city, elementId) {
    const tour = toursData.find(t => t.id === tourId);
    if (!tour) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},KE&appid=${OPENWEATHER_API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const temp = Math.round(data.main.temp); 
            const description = data.weather[0].description;
            const weatherIcon = data.weather[0].icon;
            
            let status = `${temp}°C, ${description}`;
            
            // --- THE SMART LOGIC (Determine Status) ---
            if (description.includes("rain") || description.includes("shower") || temp < 15) {
                status = `🚨 WARNING: ${temp}°C, ${description}`;
                document.getElementById(elementId).style.color = "red";
            } else if (temp > 30) {
                 status = `🔥 HOT: ${temp}°C, ${description}`;
            } else {
                 document.getElementById(elementId).style.color = "inherit";
            }

            // Store the status for map/filter logic
            tour.weatherStatus = status; 
            
            document.getElementById(elementId).innerHTML = 
                `<img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="${description}" style="width: 30px; vertical-align: middle;">
                ${status}`;
            
        } else {
            tour.weatherStatus = `Weather data unavailable.`;
            document.getElementById(elementId).innerText = tour.weatherStatus;
        }
        
    } catch (error) {
        console.error("Error fetching weather data:", error);
        tour.weatherStatus = `Failed to load weather.`;
        document.getElementById(elementId).innerText = tour.weatherStatus;
    }
}


// ====================================================================
// E. ADVANCED SEARCH AND FILTER FUNCTION (Multi-Dimensional Algorithm)
// ====================================================================
function handleSearch() {
    // 1. Get filter values (Safely check if elements exist for index.html/destinations.html context)
    const searchInput = document.getElementById('search-input')?.value.toLowerCase() || '';
    const maxPrice = parseInt(document.getElementById('price-filter')?.value) || 60000;
    const minElevation = parseInt(document.getElementById('elevation-filter')?.value) || 0;
    const durationFilter = document.getElementById('duration-filter')?.value || '';
    const weatherWarning = document.getElementById('weather-filter')?.checked || false;
    
    // Category Checkboxes
    const selectedCategories = Array.from(document.querySelectorAll('#filter-controls input[type="checkbox"]:checked'))
                                    .filter(cb => cb.id.startsWith('cat-'))
                                    .map(cb => cb.value);

    // Amenities Multi-Select
    const amenitiesSelect = document.getElementById('amenities-filter');
    const selectedAmenities = amenitiesSelect ? Array.from(amenitiesSelect.options)
                                   .filter(option => option.selected)
                                   .map(option => option.value) : [];


    // 2. Filter the original toursData array
    const filteredTours = toursData.filter(tour => {
        // Match 1: Keyword (Name or City)
        const keywordMatch = tour.name.toLowerCase().includes(searchInput) || tour.city.toLowerCase().includes(searchInput);
        
        // Match 2: Price
        const priceMatch = tour.price <= maxPrice;

        // Match 3: Duration
        const durationMatch = !durationFilter || tour.duration === durationFilter;

        // Match 4: Elevation
        const elevationMatch = tour.elevation >= minElevation;

        // Match 5: Category (Must match AT LEAST one selected, or no categories selected)
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(tour.category);

        // Match 6: Amenities (Must have ALL selected amenities)
        const amenityMatch = selectedAmenities.every(amenity => tour.amenities.includes(amenity));

        // Match 7: Weather (Only show tours with warnings if checked)
        const weatherMatch = !weatherWarning || (weatherWarning && (tour.weatherStatus && tour.weatherStatus.includes('WARNING')));
        
        return keywordMatch && priceMatch && durationMatch && elevationMatch && categoryMatch && amenityMatch && weatherMatch;
    });

    // 3. Re-render the list, update the map, and update the dashboard
    renderTours(filteredTours);
    if (document.getElementById('total-tours-count')) {
        updateDashboardSummary(filteredTours);
    }
}


// ====================================================================
// F. TOUR RENDERING FUNCTION (Handles destinations.html)
// ====================================================================
function renderTours(dataToRender) {
    const listingsContainer = document.getElementById('tour-listings');
    const tourCountDisplay = document.getElementById('tour-count');

    if (!listingsContainer) return;

    listingsContainer.innerHTML = ''; 

    if (dataToRender.length === 0) {
        listingsContainer.innerHTML = '<p style="padding: 50px; text-align: center; background: #fff; border-radius: 8px;">No tours found matching your multi-dimensional search criteria.</p>';
        tourCountDisplay.innerText = 0;
        addMarkersToMap([]); 
        return;
    }
    
    tourCountDisplay.innerText = dataToRender.length;
    addMarkersToMap(dataToRender); 

    dataToRender.forEach(tour => {
        // Prepare amenities list with icons
        const amenityIcons = tour.amenities.map(a => {
            switch(a) {
                case 'WiFi': return `<i class="fas fa-wifi" title="Free WiFi"></i>`;
                case 'Pool': return `<i class="fas fa-swimming-pool" title="Pool Access"></i>`;
                case 'FullBoard': return `<i class="fas fa-utensils" title="Full Board Meals"></i>`;
                case 'EVCharging': return `<i class="fas fa-bolt" title="EV Charging Available"></i>`;
                default: return '';
            }
        }).join(' ');

        // The ADVANCED Tour Card HTML structure
        const tourCardHTML = `
            <div class="destination-card" style="width: 100%; display: flex; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); border-left: 5px solid var(--secondary-color);">
                <img src="${tour.image}" alt="${tour.name}" style="width: 30%; max-height: 200px; object-fit: cover; border-radius: 4px 0 0 4px;">
                
                <div style="padding: 15px; flex-grow: 1;">
                    <h3 style="margin-top: 0; color: #343a40;">${tour.name} - ${tour.city}</h3>
                    <p style="font-size: 0.9em; color: #555;">${tour.description}</p>
                    
                    <div style="display: flex; justify-content: space-between; margin-top: 10px; font-size: 0.9em;">
                        <span style="font-weight: bold; color: #007bff;"><i class="fas fa-tags"></i> Category: ${tour.category}</span>
                        <span><i class="fas fa-mountain"></i> Elev: ${tour.elevation}m</span>
                        <span><i class="fas fa-clock"></i> Duration: ${tour.duration}</span>
                    </div>

                    <div class="live-data-box" style="margin-top: 10px; border: 1px dashed #ccc; padding: 10px;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <h4>Live Status:</h4>
                                <p><strong>Price:</strong> <span id="price-${tour.id}" style="color: #007bff; font-weight: bold;">${tour.price.toLocaleString()}</span> KSH</p>
                                <p><strong>Weather:</strong> <span id="weather-${tour.id}" style="font-weight: bold;">${tour.weatherStatus || 'Loading Weather...'}</span></p>
                            </div>
                            <div style="text-align: right;">
                                <h4>Amenities:</h4>
                                <span style="font-size: 1.5em; color: #28a745;">${amenityIcons || 'None Specified'}</span>
                            </div>
                        </div>
                    </div>
                    
                    <button onclick="bookNow('${tour.name}', '${tour.id}')" style="margin-top: 10px;">
                        Secure Booking via WhatsApp
                    </button>
                </div>
            </div>
        `;
        listingsContainer.innerHTML += tourCardHTML;
        
        fetchAndDisplayWeather(tour.id, tour.city, `weather-${tour.id}`);
    });
}


// ====================================================================
// G. HOMEPAGE RENDERING FUNCTION (Handles index.html)
// ====================================================================
function renderFeaturedTours() {
    const featuredContainer = document.getElementById('featured-listings');
    if (!featuredContainer) return; 

    const featuredTours = toursData.slice(0, 3); 

    featuredTours.forEach(tour => {
        const tourCardHTML = `
            <div class="destination-card" style="width: 300px;">
                <img src="${tour.image}" alt="${tour.name}" style="width:100%; height:200px; object-fit: cover; border-radius: 6px;">
                <h3 style="margin-top: 10px;">${tour.name}</h3>
                <p style="margin-bottom: 10px; font-size: 0.9rem;">${tour.description}</p>
                
                <div class="live-data-box">
                    <p><strong>Price:</strong> <span id="price-${tour.id}">${tour.price.toLocaleString()}</span> KSH</p>
                    <p><strong>Weather:</strong> <span id="home-weather-${tour.id}">Loading Weather...</span></p>
                </div>
                
                <button onclick="bookNow('${tour.name}', '${tour.id}')" style="margin-top: 15px; width: 100%;">
                    Quick Book
                </button>
            </div>
        `;
        featuredContainer.innerHTML += tourCardHTML;

        fetchAndDisplayWeather(tour.id, tour.city, `home-weather-${tour.id}`);
    });
}


// ====================================================================
// H. HELPER FUNCTIONS
// ====================================================================

// WhatsApp Booking Function
function bookNow(destinationName, tourId) {
    const recipientNumber = BOOKING_WHATSAPP_NUMBER; 
    
    const packagePriceElement = document.getElementById(`price-${tourId}`);
    const packagePrice = packagePriceElement ? packagePriceElement.innerText : 'Unknown Price';

    const message = encodeURIComponent(
        `Hello Safari-Smart Team, I want to book the following package:\n` +
        `✅ Destination: ${destinationName}\n` +
        `💰 Package Price: ${packagePrice} KSH\n` +
        `Please confirm availability and share payment details via M-Pesa.`
    );

    const whatsappUrl = `https://wa.me/${recipientNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Updates the Max Price Range Display
function updatePriceValue(value) {
    document.getElementById('price-value').innerText = `KSH ${parseInt(value).toLocaleString()}`;
}

// Updates the Min Elevation Range Display
function updateElevationValue(value) {
    document.getElementById('elevation-value').innerText = `${parseInt(value).toLocaleString()} Meters+`;
}

// Clears all filters and re-runs the search
function clearAllFilters() {
    document.getElementById('search-input').value = '';
    
    const priceFilter = document.getElementById('price-filter');
    if (priceFilter) {
        priceFilter.value = priceFilter.max;
        updatePriceValue(priceFilter.max);
    }
    
    document.getElementById('duration-filter').value = '';
    
    const elevationFilter = document.getElementById('elevation-filter');
    if (elevationFilter) {
        elevationFilter.value = elevationFilter.min;
        updateElevationValue(elevationFilter.min);
    }

    // Reset checkboxes
    const checkboxes = document.querySelectorAll('#filter-controls input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = false);

    // Reset amenities multi-select
    const amenitiesSelect = document.getElementById('amenities-filter');
    if (amenitiesSelect) {
        amenitiesSelect.selectedIndex = -1;
    }

    handleSearch();
}

// Dashboard Summary Update Function
function updateDashboardSummary(data) {
    document.getElementById('total-tours-count').innerText = toursData.length; 
    
    const totalPrices = data.reduce((sum, tour) => sum + tour.price, 0);
    const avgPrice = data.length > 0 ? (totalPrices / data.length).toFixed(0) : 'N/A';
    
    document.getElementById('avg-price').innerText = data.length > 0 ? `KSH ${parseInt(avgPrice).toLocaleString()}` : '0';
}


// ====================================================================
// I. FINAL INITIALIZATION
// ====================================================================
function initializeApp() {
    console.log("Safari-Smart App Initializing...");
    
    // Always fetch currency rate regardless of page
    fetchCurrencyRate();
    
    const isDestinationsPage = document.getElementById('tour-listings');
    const isHomepage = document.getElementById('featured-listings');

    if (isDestinationsPage) {
        // If on destinations.html: Load all complex features
        updatePriceValue(document.getElementById('price-filter').value); 
        updateElevationValue(document.getElementById('elevation-filter').value); 
        handleSearch(); // Triggers rendering, weather fetching, and map update
        updateDashboardSummary(toursData);
    } else if (isHomepage) {
        // If on index.html: Load featured tours only
        renderFeaturedTours();
    }
}

// Call the function on page load
window.onload = initializeApp;
// Events Data
const EVENTS = [
    {
        id: 1,
        title: "Sunburn Arena Goa",
        category: "concerts",
        date: "2025-03-15",
        venue: "Vagator Beach",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
        availableTickets: 250,
        totalTickets: 1000,
    },
    {
        id: 2,
        title: "Comedy Night at Baga",
        category: "comedy",
        date: "2025-03-20",
        venue: "LPK Waterfront",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
        availableTickets: 100,
        totalTickets: 200,
    },
    {
        id: 3,
        title: "Jazz by the Beach",
        date: "2024-03-25",
        venue: "Anjuna Beach",
        image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629",
        category: "Live Music"
    }
];

// Initialize Lucide icons
lucide.createIcons();

// Render events based on category
function renderEvents(category = 'all') {
    const eventsGrid = document.getElementById('eventsGrid');
    eventsGrid.innerHTML = ''; // Clear existing events
    
    const filteredEvents = category === 'all' 
        ? EVENTS 
        : EVENTS.filter(event => event.category === category);
    
    filteredEvents.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        
        const ticketPercentage = (event.availableTickets / event.totalTickets) * 100;
        
        eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="event-card-content">
                <h3>${event.title}</h3>
                <div class="event-details">
                    <span>
                        <i data-lucide="calendar"></i>
                        ${new Date(event.date).toLocaleDateString()}
                    </span>
                    <span>
                        <i data-lucide="map-pin"></i>
                        ${event.venue}
                    </span>
                </div>
                <div class="ticket-progress">
                    <div class="progress-bar">
                        <div class="progress" style="width: ${ticketPercentage}%"></div>
                    </div>
                    <p>${event.availableTickets} tickets left</p>
                </div>
            </div>
        `;
        
        eventsGrid.appendChild(eventCard);
    });
    
    // Refresh icons for dynamically added content
    lucide.createIcons();
}

// Handle category filter clicks
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Update active state
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter events
        const category = button.dataset.category;
        renderEvents(category);
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderEvents();
});
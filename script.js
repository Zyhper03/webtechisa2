// Featured Events Data
const FEATURED_EVENTS = [
    {
        id: 1,
        title: "Sunburn Arena Goa",
        date: "2024-03-15",
        venue: "Vagator Beach",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
        category: "Music Festival"
    },
    {
        id: 2,
        title: "Comedy Night at Baga",
        date: "2024-03-20",
        venue: "LPK Waterfront",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
        category: "Stand-up Comedy"
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

// Populate Featured Events
function renderFeaturedEvents() {
    const eventsContainer = document.getElementById('featuredEvents');
    
    FEATURED_EVENTS.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        
        eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="event-card-content">
                <span class="category">${event.category}</span>
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
            </div>
        `;
        
        eventsContainer.appendChild(eventCard);
    });
    
    // Refresh icons for dynamically added content
    lucide.createIcons();
}

// Sign In Modal Functionality
function handleSignIn() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Sign In</h2>
            <form id="signInForm" class="sign-in-form">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" required>
                </div>
                <button type="submit" class="button-primary">Sign In</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
    // Close button functionality
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => modal.remove();
    // Close when clicking outside
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.remove();
        }
    };
    // Handle form submission
    const form = modal.querySelector('#signInForm');
    form.onsubmit = (e) => {
        e.preventDefault();
        const email = form.email.value;
        const password = form.password.value;
        
        // Here you would typically make an API call to authenticate
        console.log('Sign in attempt:', { email, password });
        alert('Sign in successful!');
        modal.remove();
    };
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedEvents();

        // Add sign in button listener
        const signInBtn = document.querySelector('.button-primary');
        signInBtn.addEventListener('click', handleSignIn);


});



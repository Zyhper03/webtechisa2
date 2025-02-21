document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Log form data (in a real application, this would be sent to a server)
        console.log('Form submitted:', formData);
        
        // Clear form
        contactForm.reset();
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
    });
});
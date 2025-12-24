// Modal selection functionality
function selectSimulation(type) {
    // Store the selected simulation type
    localStorage.setItem('selectedSimulation', type);
    
    // Navigate to the first page of the selected simulation
    if(type === 'quenching') {
        window.location.href = 'quenching-setup.html';
    }
}

// Back to selection functionality
function backToSelection() {
    localStorage.removeItem('selectedSimulation');
    window.location.href = 'index.html';
}

// Check if on index page and handle modal display
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-overlay');
    
    // If modal exists (on index page), show it
    if (modal) {
        modal.style.display = 'flex';
    }
});

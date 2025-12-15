//Your JavaScript goes in here
// Modal selection functionality
function selectSimulation(type) {
    // Store the selected simulation type
    localStorage.setItem('selectedSimulation', type);
    
    // Navigate to the first page of the selected simulation
    switch(type) {
        case 'cogging':
            window.location.href = 'cogging-setup.html';
            break;
        case 'becking':
            window.location.href = 'becking-setup.html';
            break;
        case 'mds':
            window.location.href = 'mds-setup.html';
            break;
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
    
    // If on a subpage, show the sidebar
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        const selectedSimulation = localStorage.getItem('selectedSimulation');
        if (selectedSimulation) {
            sidebar.style.display = 'block';
            
            // Show the appropriate navigation section
            const navSection = document.getElementById(selectedSimulation + '-nav');
            if (navSection) {
                navSection.style.display = 'block';
            }
        }
    }
});//Your JavaScript goes in here

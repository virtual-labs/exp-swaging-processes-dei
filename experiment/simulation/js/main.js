// Experiment data
const experiments = {
    kinematics: {
        title: 'Swaging Kinematics',
        video: './images/Swaging_Kinematics.mp4'
    },
    strain: {
        title: 'Swaging Strain',
        video: './images/Swaging_Strain.mp4'
    }
};

// Function to show the selected experiment video
function showExperiment(experimentType) {
    const experiment = experiments[experimentType];
    
    if (!experiment) {
        console.error('Invalid experiment type:', experimentType);
        return;
    }
    
    // Hide selection screen
    const selectionContainer = document.getElementById('experimentSelection');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoTitle = document.getElementById('videoTitle');
    const videoSource = document.getElementById('videoSource');
    const video = document.getElementById('experimentVideo');
    
    // Update video content
    videoTitle.textContent = experiment.title;
    videoSource.src = experiment.video;
    
    // Reload video with new source
    video.load();
    
    // Show video player with smooth transition
    selectionContainer.classList.add('hidden');
    videoPlayer.classList.remove('hidden');
    
    // Auto-play video
    video.play().catch(err => {
        console.log('Auto-play prevented:', err);
    });
}

// Function to go back to experiment selection
function backToSelection() {
    const selectionContainer = document.getElementById('experimentSelection');
    const videoPlayer = document.getElementById('videoPlayer');
    const video = document.getElementById('experimentVideo');
    
    // Pause video
    video.pause();
    
    // Show selection screen
    videoPlayer.classList.add('hidden');
    selectionContainer.classList.remove('hidden');
}

// Handle keyboard navigation
document.addEventListener('keydown', function(event) {
    // Press Escape to go back
    if (event.key === 'Escape') {
        const videoPlayer = document.getElementById('videoPlayer');
        if (!videoPlayer.classList.contains('hidden')) {
            backToSelection();
        }
    }
});

// Add smooth page load animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

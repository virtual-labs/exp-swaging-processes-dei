// Video mapping for Process and Result
const videoData = {
    process: {
        title: 'Process - Swaging Kinematics',
        video: './images/Swaging_Kinematics.mp4'
    },
    result: {
        title: 'Result - Swaging Strain',
        video: './images/Swaging_Strain.mp4'
    }
};

// Function to show the selected video
function showVideo(type) {
    const data = videoData[type];

    if (!data) {
        console.error('Invalid video type:', type);
        return;
    }

    // Get elements
    const simulationMain = document.getElementById('simulationMain');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoTitle = document.getElementById('videoTitle');
    const videoSource = document.getElementById('videoSource');
    const video = document.getElementById('simulationVideo');

    // Update video content
    videoTitle.textContent = data.title;
    videoSource.src = data.video;

    // Reload video with new source
    video.load();

    // Show video player with smooth transition
    simulationMain.classList.add('hidden');
    videoPlayer.classList.remove('hidden');

    // Auto-play video
    video.play().catch(err => {
        console.log('Auto-play prevented:', err);
    });
}

// Function to go back to main simulation screen
function backToMain() {
    const simulationMain = document.getElementById('simulationMain');
    const videoPlayer = document.getElementById('videoPlayer');
    const video = document.getElementById('simulationVideo');

    // Pause video
    video.pause();

    // Show main screen
    videoPlayer.classList.add('hidden');
    simulationMain.classList.remove('hidden');
}

// Handle keyboard navigation
document.addEventListener('keydown', function (event) {
    // Press Escape to go back
    if (event.key === 'Escape') {
        const videoPlayer = document.getElementById('videoPlayer');
        if (!videoPlayer.classList.contains('hidden')) {
            backToMain();
        }
    }
});

// Add smooth page load animation
window.addEventListener('load', function () {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

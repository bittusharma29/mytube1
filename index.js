document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded');
});

function searchVideos() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const videos = document.querySelectorAll('.video');
    
    videos.forEach(video => {
        const title = video.querySelector('h2').innerText.toLowerCase();
        if (title.includes(searchTerm)) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
}

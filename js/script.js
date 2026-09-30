// Sample Works Data Store (Edit/Add your previous works here)
const sampleWorksData = {
    'gis-routing': [
        { title: 'Davao City Evacuation Router', description: 'Interactive Mapbox/Leaflet UI with NetworkX shortest path routing.', link: '#' },
        { title: 'Road Network Graph Processor', description: 'Parsed raw OpenStreetMap data into spatial GraphML files.', link: '#' }
    ],
    'flask-apps': [
        { title: 'EvacSystem Dashboard', description: 'Flask backend for real-time occupancy and evacuee registration.', link: '#' },
        { title: 'API Gateway Service', description: 'RESTful API serving spatial routing calculations to frontend clients.', link: '#' }
    ],
    'academic-labs': [
        { title: 'Lab 1: Dijkstra & A* Analysis', description: 'Performance comparison of graph traversal algorithms in Python.', link: '#' },
        { title: 'Lab 2: GIS Spatial Projections', description: 'GeoPandas and Shapely integration for spatial data transformation.', link: '#' }
    ]
};

// Toggle or Reveal Sample Works Panel
function selectSampleCategory(categoryKey) {
    const data = sampleWorksData[categoryKey];
    const container = document.getElementById('works-display-container');
    
    if (!data || !container) return;

    // Highlight selected box button
    document.querySelectorAll('.sample-work-box').forEach(box => box.classList.remove('active'));
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }

    // Build items HTML dynamically
    let itemsHTML = data.map(item => `
        <div class="work-item-card">
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <a href="${item.link}" target="_blank" class="work-link">View Project →</a>
        </div>
    `).join('');

    // Reveal and render into container
    container.innerHTML = itemsHTML;
    container.style.display = 'grid'; // or 'block' depending on your layout
}


// Open a modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);

    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        console.error('Modal not found:', modalId);
    }
}

// Close a modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);

    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    } else {
        console.error('Modal not found:', modalId);
    }
}

// Open PDF Gallery
function openPDFGallery(galleryId) {
    const gallery = document.getElementById(galleryId);

    if (gallery) {
        gallery.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        console.error('PDF Gallery not found:', galleryId);
    }
}


// Close PDF Gallery
function closePDFGallery(galleryId) {
    const gallery = document.getElementById(galleryId);

    if (gallery) {
        gallery.classList.remove('active');
        document.body.style.overflow = 'auto';
    } else {
        console.error('PDF Gallery not found:', galleryId);
    }
}

// Close modal when clicking the dark background
window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Image Viewer
let currentZoom = 1;


// Open image viewer
function openImageViewer(image) {

    const viewer = document.getElementById('imageViewer');
    const viewerImage = document.getElementById('viewerImage');

    viewerImage.src = image.src;
    viewerImage.alt = image.alt;

    currentZoom = 1;
    viewerImage.style.transform = 'scale(1)';

    viewer.classList.add('active');

    document.body.style.overflow = 'hidden';
}


// Close image viewer
function closeImageViewer() {

    const viewer = document.getElementById('imageViewer');

    viewer.classList.remove('active');

    document.body.style.overflow = 'auto';
}


// Zoom In
function zoomIn() {

    currentZoom += 0.25;

    if (currentZoom > 4) {
        currentZoom = 4;
    }

    document.getElementById('viewerImage').style.transform =
        `scale(${currentZoom})`;
}


// Zoom Out
function zoomOut() {

    currentZoom -= 0.25;

    if (currentZoom < 0.5) {
        currentZoom = 0.5;
    }

    document.getElementById('viewerImage').style.transform =
        `scale(${currentZoom})`;
}


// Reset Zoom
function resetZoom() {

    currentZoom = 1;

    document.getElementById('viewerImage').style.transform =
        'scale(1)';
}


// Close when clicking the dark background
document.addEventListener('click', function(event) {

    const viewer = document.getElementById('imageViewer');

    if (event.target === viewer) {
        closeImageViewer();
    }

});

// Tools Filter
function filterTools(event, category) {

    // Get all tool cards
    const toolCards = document.querySelectorAll('.tool-card');

    // Get all filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Remove active state from all buttons
    filterButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Make the clicked button active
    event.currentTarget.classList.add('active');

    // Show/hide tools
    toolCards.forEach(card => {

        const cardCategory = card.getAttribute('data-cat');

        if (category === 'all' || cardCategory === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }

    });
}


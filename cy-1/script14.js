// Function to detect device type
function detectDevice() {
    var deviceTypeElement = document.getElementById('deviceType');
    var featureList = document.getElementById('featureList');

    if (window.innerWidth < 768) {
        deviceTypeElement.textContent = "You are using a mobile device.";
        // Example mobile features
        featureList.innerHTML = `
            <div class="feature">Mobile Feature 1</div>
            <div class="feature">Mobile Feature 2</div>
        `;
    } else if (window.innerWidth < 1024) {
        deviceTypeElement.textContent = "You are using a tablet.";
        // Example tablet features
        featureList.innerHTML = `
            <div class="feature">Tablet Feature 1</div>
        `;
    }
}
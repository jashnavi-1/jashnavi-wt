async function fetchData() {
    const loadingElement = document.getElementById('loading');
    const dataBody = document.getElementById('dataBody');

    try {
        // Show loading indicator
        loadingElement.style.display = 'block';

        // Fetch data from API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error('Something went wrong');
        }

        const users = await response.json();
        renderData(users);

    } catch (error) {
        console.error('There was a problem fetching the data', error);
        alert("Failed to fetch data");
    } finally {
        // Hide loading indicator
        loadingElement.style.display = 'none';
    }
}

function renderData(data) {
    const dataBody = document.getElementById('dataBody');
    dataBody.innerHTML = ''; // Clear existing content

    data.forEach(user => {
        const row = document.createElement('tr');
        // Use backticks for template literals to inject variables
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
        `;
        dataBody.appendChild(row);
    });
}

// Initial call
fetchData();
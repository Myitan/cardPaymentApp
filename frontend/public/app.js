const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080';

const helloResponse = await fetch(`${API_BASE}/api/hello`);
const cardsResponse = await fetch(`${API_BASE}/api/cards`);

document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Test backend connection
        const helloResponse = await fetch('http://localhost:8080/api/hello');
        const helloText = await helloResponse.text();

        // Get sample data
        const cardsResponse = await fetch('http://localhost:8080/api/cards');
        const cards = await cardsResponse.json();

        // Display results
        const container = document.querySelector('.container');
        container.innerHTML = `
            <h1 class="text-3xl font-bold mb-4">${helloText}</h1>
            <div class="bg-white p-6 rounded-lg shadow">
                <h2 class="text-xl font-semibold mb-4">Sample Cards</h2>
                <ul class="list-disc pl-6">
                    ${cards.map(card => `<li>${card}</li>`).join('')}
                </ul>
            </div>
        `;
    } catch (error) {
        console.error('Error:', error);
    }
});
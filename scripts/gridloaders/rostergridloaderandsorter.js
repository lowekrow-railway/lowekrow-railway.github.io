// Fetch the separate grid contents file
document.querySelectorAll('[data-source]').forEach(container => {
    const source = container.getAttribute('data-source');
    const containerId = container.id;
    fetch(source)
    .then(response => response.text())
    .then(data => {
    document.getElementById(containerId).innerHTML = data;

    // Call immediately after the grid content loads to sort by name on initialization
        sortRoster(containerId, 'name', 'asc');
    });
});

function sortRoster(containerId, criteria, direction) {
    const grid = document.getElementById(containerId);
    
    // Grab all cards
    const cards = Array.from(grid.querySelectorAll('.gridcard'));
    
    // Grab the fixed end of the grid
    const fixedcard = grid.querySelector('.endcard');

    // Sort the cards based on the chosen criteria
    cards.sort((a, b) => {
        let valA = a.getAttribute(`data-${criteria}`).toLowerCase();
        let valB = b.getAttribute(`data-${criteria}`).toLowerCase();

        if (valA < valB) return direction === 'asc' ? -1 : 1;
        if (valA > valB) return direction === 'asc' ? 1 : -1;
        return 0;
    });

    // Clear the grid container temporarily
    grid.innerHTML = '';

    // Re-append the sorted cards back into the grid
    cards.forEach(card => grid.appendChild(card));

    // Always re-append the end so it never moves
    if (fixedcard) {
        grid.appendChild(fixedcard);
    }
}
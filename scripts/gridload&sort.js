// Build all requested grids on page and sort them all by name
document.querySelectorAll('[data-source]').forEach(container => {
    const source = container.getAttribute('data-source');
    const containerId = container.id;
    
    // Display respective grids in their right spots
    fetch(source)
    .then(response => response.text())
    .then(data => {
    document.getElementById(containerId).innerHTML = data;

    // Sort grids by name on initialization
        sortGrid(containerId, 'name', 'asc');
    });
});

function sortGrid(containerId, criteria, direction) {
    // Grab grid that will be sorted
    const grid = document.getElementById(containerId);
    
    // Grab all cards
    const cards = Array.from(grid.querySelectorAll('.gridcard'));
    
    // Grab the fixed end of the grid
    const fixedcard = grid.querySelector('.endcard');

    // Sort non-fixed cards based on the chosen criteria
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

    // Always re-append the end last so it never moves
    if (fixedcard) {
        grid.appendChild(fixedcard);
    }
}
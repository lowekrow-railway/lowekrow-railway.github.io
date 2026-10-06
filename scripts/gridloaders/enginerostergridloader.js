// Fetch the separate grid contents file
fetch('./tables&grids/enginerostergrid.html')
.then(response => response.text())
.then(data => {
  document.getElementById('engineroster').innerHTML = data;
});

function sortRoster(criteria, direction) {
    const grid = document.getElementById('engineroster');
    
    // Grab all grid cards
    const cards = Array.from(grid.querySelectorAll('.enginecard'));
    
    // Grab the fixed end of the grid
    const fixedcard = grid.querySelector('.endcard');

    // Sort the engine cards array based on the chosen criteria
    cards.sort((a, b) => {
        let valA = a.getAttribute(`data-${criteria}`).toLowerCase();
        let valB = b.getAttribute(`data-${criteria}`).toLowerCase();

        if (valA < valB) return direction === 'asc' ? -1 : 1;
        if (valA > valB) return direction === 'asc' ? 1 : -1;
        return 0;
    });

    // Clear the grid container temporarily
    grid.innerHTML = '';

    // Re-append the sorted engine cards back into the grid
    cards.forEach(card => grid.appendChild(card));

    // Always re-append the end so it never moves
    if (fixedcard) {
        grid.appendChild(fixedcard);
    }
}
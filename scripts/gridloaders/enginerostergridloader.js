// Fetch the separate grid contents file
fetch('./tables&grids/enginerostergrid.html')
.then(response => response.text())
.then(data => {
  document.getElementById('engineroster').innerHTML = data;
});

function sortRoster(criteria, direction) {
    const grid = document.getElementById('engineroster');
    
    // Grab all standard cards (exclude the fixed card)
    const cards = Array.from(grid.querySelectorAll('.engine-card'));
    
    // Grab the fixed "MORE COMING SOON!" card
    const fixedCard = grid.querySelector('.fixed-last-card');

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

    // Always re-append the fixed card last so it never moves
    if (fixedCard) {
        grid.appendChild(fixedCard);
    }
}
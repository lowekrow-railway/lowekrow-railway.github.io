// Fetch the separate grid contents file
fetch('./tables&grids/rostergrid.html')
.then(response => response.text())
.then(data => {
  document.getElementById('itemroster').innerHTML = data;
});
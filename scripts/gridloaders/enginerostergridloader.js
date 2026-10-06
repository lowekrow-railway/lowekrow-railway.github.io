// Fetch the separate grid contents file
fetch('./tables&grids/enginerostergrid.html')
.then(response => response.text())
.then(data => {
  document.getElementById('engineroster').innerHTML = data;
});
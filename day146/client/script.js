fetch("http://localhost:3000/movies")
  .then(res => res.json())
  .then(movies => {
    const list = document.getElementById("movies");
    movies.forEach(movie => {
      const li = document.createElement("li");
      li.textContent = `${movie.title} (${movie.year})`;
      list.appendChild(li);
    });
  })
  .catch(error => console.error("Error:", error));

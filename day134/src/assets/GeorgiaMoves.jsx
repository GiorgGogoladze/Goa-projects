import { Link, Routes, Route } from 'react-router-dom';

function GeorgianMovies() {
  return (
    <div>
      <h2>ქართული ფილმები</h2>
      <p>მოცემული გვერდი საუბრობს ქართულ ფილმებზე.</p>
      <nav>
        <ul>
          <li><Link to="classic">კლასიკური ფილმები</Link></li>
          <li><Link to="modern">თანამედროვე ფილმები</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="classic" element={<ClassicMovies />} />
        <Route path="modern" element={<ModernMovies />} />
      </Routes>
    </div>
  );
}

function ClassicMovies() {
  return <div>კლასიკური ფილმები: აქ იქნება ინფორმაცია ქართულ კლასიკურ ფილმებზე.</div>;
}

function ModernMovies() {
  return <div>თანამედროვე ფილმები: აქ იქნება ინფორმაცია თანამედროვე ქართულ ფილმებზე.</div>;
}

export default GeorgianMovies;

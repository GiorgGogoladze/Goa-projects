import { Link, Routes, Route } from 'react-router-dom';

function GeorgianDances() {
  return (
    <div>
      <h2>ქართული ცეკვები</h2>
      <p>მოცემული გვერდი საუბრობს ქართულ ცეკვებზე.</p>
      <nav>
        <ul>
          <li><Link to="traditional">ტრადიციული ცეკვები</Link></li>
          <li><Link to="modern">თანამედროვე ცეკვები</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="traditional" element={<TraditionalDances />} />
        <Route path="modern" element={<ModernDances />} />
      </Routes>
    </div>
  );
}

function TraditionalDances() {
  return <div>ტრადიციული ცეკვები: აქ იქნება ინფორმაცია ქართულ ტრადიციულ ცეკვებზე.</div>;
}

function ModernDances() {
  return <div>თანამედროვე ცეკვები: აქ იქნება ინფორმაცია თანამედროვე ქართულ ცეკვებზე.</div>;
}

export default GeorgianDances;

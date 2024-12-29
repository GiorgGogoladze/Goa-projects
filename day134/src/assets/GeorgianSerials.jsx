import { Link, Routes, Route } from 'react-router-dom';

function GeorgianSerials() {
  return (
    <div>
      <h2>ქართული სერიალები</h2>
      <p>მოცემული გვერდი საუბრობს ქართულ სერიალებზე.</p>
      <nav>
        <ul>
          <li><Link to="drama">დრამა</Link></li>
          <li><Link to="comedy">კომედია</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="drama" element={<DramaSerials />} />
        <Route path="comedy" element={<ComedySerials />} />
      </Routes>
    </div>
  );
}

function DramaSerials() {
  return <div>დრამა: აქ იქნება ინფორმაცია ქართული დრამატული სერიალების შესახებ.</div>;
}

function ComedySerials() {
  return <div>კომედია: აქ იქნება ინფორმაცია ქართული კომედიური სერიალების შესახებ.</div>;
}

export default GeorgianSerials;

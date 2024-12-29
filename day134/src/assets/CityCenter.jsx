import { Link, Routes, Route } from 'react-router-dom';

function CityCenter() {
  return (
    <div>
      <h2>შუა ქალაქი</h2>
      <p>მოცემული გვერდი საუბრობს შუა ქალაქზე.</p>
      <nav>
        <ul>
          <li><Link to="history">ისტორია</Link></li>
          <li><Link to="landmarks">მნიშვნელოვანი ადგილები</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="history" element={<History />} />
        <Route path="landmarks" element={<Landmarks />} />
      </Routes>
    </div>
  );
}

function History() {
  return <div>ისტორია: აქ იქნება ინფორმაცია ქალაქის ისტორიაზე.</div>;
}

function Landmarks() {
  return <div>მნიშვნელოვანი ადგილები: აქ არის ცნობადი და ისტორიული ადგილები.</div>;
}

export default CityCenter;

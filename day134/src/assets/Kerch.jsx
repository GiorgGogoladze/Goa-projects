import { Link, Routes, Route } from 'react-router-dom';

function Kerch() {
  return (
    <div>
      <h2>ქერჩი</h2>
      <p>მოცემული გვერდი საუბრობს ქერჩის შესახებ.</p>
      <nav>
        <ul>
          <li><Link to="history">ისტორია</Link></li>
          <li><Link to="attractions">მთავარი ღირსშესანიშნაობები</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="history" element={<KerchHistory />} />
        <Route path="attractions" element={<Attractions />} />
      </Routes>
    </div>
  );
}

function KerchHistory() {
  return <div>ქერჩის ისტორია: აქ იქნება ინფორმაცია ქალაქის შესახებ.</div>;
}

function Attractions() {
  return <div>ღირსშესანიშნაობები: აქ არის ცნობადი ადგილები ქერჩში.</div>;
}

export default Kerch;

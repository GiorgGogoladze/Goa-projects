import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>მოგესალმებით!</h1>
      <p>აქ შეგიძლიათ ნახოთ ინფორმაცია შემდეგ თემებზე:</p>
      <ul>
        <li><Link to="/shua-kalaki">შუა ქალაქი</Link></li>
        <li><Link to="/kerchi">ქერჩი</Link></li>
        <li><Link to="/georgian-movies">ქართული ფილმები</Link></li>
        <li><Link to="/georgian-series">ქართული სერიალები</Link></li>
        <li><Link to="/georgian-dances">ქართული ცეკვები</Link></li>
      </ul>
    </div>
  );
}

export default Home;

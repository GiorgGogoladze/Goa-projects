import { Link } from 'react-router-dom';
import './assets/home'; 

function Home() {
  return (
    <div>
      <h1>Welcome to the Georgian Culture Website</h1>
      <nav>
        <ul>
          <li><Link to="/city-center">შუა ქალაქი</Link></li>
          <li><Link to="/kerch">ქერჩი</Link></li>
          <li><Link to="/georgian-movies">ქართული ფილმები</Link></li>
          <li><Link to="/georgian-serials">ქართული სერიალები</Link></li>
          <li><Link to="/georgian-dances">ქართული ცეკვები</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;

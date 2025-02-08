import { useState } from 'react';
import './app.css';

function App() {
  const [showGames, setShowGames] = useState(false);

  const handleButtonClick = () => {
    setShowGames(true);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>მოგესალმებით ჩვენს გასართობ საიტზე!</h1>
      </header>

      <section>
        <a href="#" className="button" onClick={handleButtonClick}>
          დაწკაპეთ აქ რაიმე თამაშისთვის!
        </a>
      </section>


      {showGames && (
        <section className="top-games-section">
          <h2>ეს არის 3 საუკეთესო თამაში ამ წელს:</h2>
          <ul className="top-games">
            <li>1. Elden Ring</li>
            <li>2. God of War Ragnarök</li>
            <li>3. Horizon Forbidden West</li>
          </ul>
        </section>
      )}
    </div>
  );
}

export default App;

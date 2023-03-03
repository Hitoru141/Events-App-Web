import './App.css';
import { Login } from './Components/Login';
import Splashscreen from './Views/Spashscreen';
import { useState } from 'react';

function App() {
  const [showSplashscreen, setShowSplashscreen] = useState(true);

  setTimeout(() => {
    setShowSplashscreen(false);
  }, 2100);

  return (
    <div className="app">
      {showSplashscreen && (
  <div className={`splashscreen ${showSplashscreen ? '' : 'fade-out'}`}>
    <Splashscreen />
  </div>
)}

      {!showSplashscreen && <Login />}
    </div>
  );
}

export default App;

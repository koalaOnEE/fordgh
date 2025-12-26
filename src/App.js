
import { useEffect, useState } from "react";
import Snowfall from 'react-snowfall';
import Album from "./Album";
import './App.css';

function App() {


  const text = 
    "Hey My Love\n\n" + 
    "Spending our first everything together,\n\n"+
    "I wanted to keep track of our moments.\n\n" +
    "So I made a little photo album/scrapbook for us.\n\n"+
    "Here's the beginning of our story and so on...";

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index++;

      if (index > text.length) {
        clearInterval(interval);
      }
    }, 110);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <ul className="lightrope">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
      <Snowfall 
        style={{ 
          position: 'fixed', 
          width: '100%', 
          height: '100%',

          zIndex: 10, 
        }}
        snowflakeCount={150} 
        color="#ffffffff" 
        speed={[0.5, 3]}
        wind={[-0.5, 2]} 
      />

        <p className="message"
          style={{
            whiteSpace: "pre-wrap",
            fontSize: "23px",
            fontFamily: "monospace",
            padding: "20px",
          }}
        >
          {displayedText}
        </p>

      <div style={{ position: "relative", zIndex: 20 }}>
      <Album />
      </div>
      
    </div>
  );
}

export default App;

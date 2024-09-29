import { useState } from 'react';
import './App.css';

function App() {

  const [resp, setResp] = useState();
  const handleClick = () => {
    fetch("/api/random")
      .then(data => data.json())
      .then(respData => {
        setResp(respData.data)
      });
  };

  return (
    <div className="App">

      <button onClick={handleClick}>
        click me
      </button>
      {resp}
    </div>
  );
}

export default App;

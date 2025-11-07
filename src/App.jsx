import { useState } from 'react'; // 1. Import the hook

function App() {
  // 2. Declare state: [currentValue, functionToUpdateIt] = useState(initialValue)
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Interactive Counter</h1>
      <p>Current count: <strong>{count}</strong></p>

      {/* 3. Use the setter function on click */}
      <button onClick={() => setCount(count + 1)} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Increase Count
      </button>
    </div>
  );
}

export default App; 
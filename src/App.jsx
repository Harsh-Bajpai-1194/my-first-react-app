import { useState, useEffect } from 'react'

// TechCard component stays exactly the same
function TechCard({ name, role }) {
  return (
    <div style={{ backgroundColor: '#2a2a2a', padding: '15px', marginBottom: '10px', borderRadius: '8px', borderLeft: '5px solid #646cff' }}>
      <h3 style={{ margin: 0 }}>{name}</h3>
      <p style={{ margin: '5px 0 0 0', color: '#aaa' }}>{role}</p>
    </div>
  );
}

function App() {
  const [mernStack, setMernStack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 1. NEW: State to track the input field
  const [techName, setTechName] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setMernStack([
        { id: 1, name: 'MongoDB', role: 'Database' },
        { id: 2, name: 'Express.js', role: 'Backend Framework' },
        { id: 3, name: 'React.js', role: 'Frontend Library' },
        { id: 4, name: 'Node.js', role: 'Runtime Environment' }
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  // 2. NEW: Function to handle adding new items
  function handleSubmit(e) {
    e.preventDefault(); // Vital: Stops the page from refreshing on submit
    if (!techName.trim()) return; // Don't add empty names

    const newTech = {
        id: Date.now(), // Use timestamp as a unique ID for now
        name: techName,
        role: 'Added by User' // Hardcoded role for simplicity
    };

    // VITAL: We cannot use mernStack.push(). We must create a NEW array.
    // The [...mernStack] spreads the old items, and we add the new one at the end.
    setMernStack([...mernStack, newTech]);

    // Clear the input field
    setTechName('');
  }

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>The MERN Stack</h1>

      {/* 3. NEW: The Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '25px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Add another tech..."
          value={techName}
          onChange={(e) => setTechName(e.target.value)}
          style={{ flex: 1, padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Add
        </button>
      </form>

      {isLoading ? (
        <p style={{ fontSize: '1.2rem' }}>⏳ Loading data from server...</p>
      ) : (
        <div>
          {mernStack.map((tech) => (
            <TechCard key={tech.id} name={tech.name} role={tech.role} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
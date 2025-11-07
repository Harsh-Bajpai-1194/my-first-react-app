import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TechCard({ name, role }) {
  return (
    <div style={{ backgroundColor: '#2a2a2a', padding: '15px', marginBottom: '10px', borderRadius: '8px', borderLeft: '5px solid #646cff' }}>
      <h3 style={{ margin: 0 }}>{name}</h3>
      <p style={{ margin: '5px 0 0 0', color: '#aaa' }}>{role}</p>
    </div>
  );
}

function Home() {
  // Initialize state with function to check local storage immediately
  const [mernStack, setMernStack] = useState(() => {
    const savedData = localStorage.getItem('mern-data');
    return savedData ? JSON.parse(savedData) : [];
  });

  const [isLoading, setIsLoading] = useState(true);
  const [techName, setTechName] = useState('');

  // Effect 1: Initial load (simulating server delay if no local data exists yet)
  useEffect(() => {
    if (mernStack.length > 0) {
      setIsLoading(false); // If we have local data, don't show loading
      return;
    }

    console.log("No local data found, fetching defaults...");
    setTimeout(() => {
      const defaultData = [
        { id: 1, name: 'MongoDB', role: 'Database' },
        { id: 2, name: 'Express.js', role: 'Backend Framework' },
        { id: 3, name: 'React.js', role: 'Frontend Library' },
        { id: 4, name: 'Node.js', role: 'Runtime Environment' }
      ];
      setMernStack(defaultData);
      setIsLoading(false);
    }, 1000);
  }, []); // Runs once on mount

  // Effect 2: Save to local storage whenever mernStack changes
  useEffect(() => {
    if (mernStack.length > 0) {
       localStorage.setItem('mern-data', JSON.stringify(mernStack));
    }
  }, [mernStack]); // Runs whenever mernStack changes

  function handleSubmit(e) {
    e.preventDefault();
    if (!techName.trim()) return;

    const newTech = {
        id: Date.now(),
        name: techName,
        role: 'Added by User'
    };

    setMernStack([...mernStack, newTech]);
    setTechName('');
  }

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>The MERN Stack</h1>
      <Link to="/about" style={{ display: 'block', marginBottom: '20px', color: '#646cff' }}>
         → Go to About Page
      </Link>

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
        <p style={{ fontSize: '1.2rem' }}>⏳ Loading data...</p>
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

export default Home;
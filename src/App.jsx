import { useState } from 'react'

// 1. The new child Component.
// It receives data through 'props'. We destructured { name, role } immediately.
function TechCard({ name, role }) {
  return (
    <div style={{
      backgroundColor: '#2a2a2a',
      padding: '15px',
      marginBottom: '10px',
      borderRadius: '8px',
      borderLeft: '5px solid #646cff'
    }}>
      <h3 style={{ margin: 0 }}>{name}</h3>
      <p style={{ margin: '5px 0 0 0', color: '#aaa' }}>{role}</p>
    </div>
  );
}

// 2. The main parent Component
function App() {
  const mernStack = [
    { id: 1, name: 'MongoDB', role: 'Database' },
    { id: 2, name: 'Express.js', role: 'Backend Framework' },
    { id: 3, name: 'React.js', role: 'Frontend Library' },
    { id: 4, name: 'Node.js', role: 'Runtime Environment' }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>The MERN Stack</h1>
      <div>
        {mernStack.map((tech) => (
          // 3. Using the child component and passing data as 'props'
          <TechCard key={tech.id} name={tech.name} role={tech.role} />
        ))}
      </div>
    </div>
  );
}

export default App;
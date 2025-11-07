import { Link } from 'react-router-dom';

function About() {
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>About This App</h1>
      <p>This is a simple MERN stack learning project built with React and Vite.</p>
      {/* Link is like an HTML <a> tag, but it doesn't reload the page! */}
      <Link to="/">Go back Home</Link>
    </div>
  );
}

export default About;
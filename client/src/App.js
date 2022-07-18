import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <nav className="Nav">
        <Link className="NavLink" to={'graph'}>Graph</Link>
        <Link className="NavLink" to={'upload'}>Upload</Link>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default App;

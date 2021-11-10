import './App.css';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import {Routes, Route} from 'react-router-dom';
import Projects from './Projects'

function App() {
  return (
      <div className="App">
        <NavBar className="sticky"/>
        <Routes>
          <Route path="/" element={<Intro/> } />
          <Route path="/landing-page" element={<Intro/> } />
          <Route path="/projects" element={<Projects />} />
          <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
          />
        </Routes>
      </div>
  );
}

export default App;

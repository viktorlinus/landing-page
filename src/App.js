import './App.css';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import Introduction from './components/Introduction/Introduction';
import {Routes, Route} from 'react-router-dom';
import Projects from './Projects';
import BlogPost from './components/BlogPost/BlogPost';

function App() {
  return (
      <div className="App">
        <NavBar className=""/>
        <Routes>
          <Route path="/" element={
            <main >
              <Intro/>
              <Introduction />
            </main>
            } />
          <Route path="/landing-page" element={
            <main >
              <Intro/>
              <Introduction />
            </main>
            } />
          <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:invoiceId" element={<BlogPost />} />
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

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DarkMode from './components/darkMode';

// pages
import Home from './pages/Home';
import Microbots from './pages/Microbots';
import Projects from './pages/Projects';
import Documentation from './pages/Documentation';
import MeetTheTeam from './pages/MeetTheTeam';
import GettingStarted from './pages/GettingStarted';
import Donate from './pages/Donate';
import Placeholder from './pages/Placeholder';
import PageNotFound from './pages/PageNotFound';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Microbots">Microbots</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/MeetTheTeam">Meet the Team</Link>
                <Link to="/Donate">Donate</Link>
                <Link to="/GettingStarted">Getting Started</Link>
                <DarkMode />
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Microbots" element={<Microbots />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Documentation" element={<Documentation />} />
                <Route path="/MeetTheTeam" element={<MeetTheTeam />} />
                <Route path="/Donate" element={<Donate />} />
                <Route path="/GettingStarted" element={<GettingStarted />} />
                <Route path="/Placeholder" element={<Placeholder />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

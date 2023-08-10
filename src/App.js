import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveNavBar from './components/ResponsiveNavBar';


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
            <ResponsiveNavBar />
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

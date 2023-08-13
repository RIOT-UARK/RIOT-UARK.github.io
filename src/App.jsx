import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

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
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />,
            <Route path="/Microbots" element={<Microbots />} />,
            <Route path="/Projects" element={<Projects />} />,
            <Route path="/Documentation" element={<Documentation />} />,
            <Route path="/MeetTheTeam" element={<MeetTheTeam />} />,
            <Route path="/Donate" element={<Donate />} />,
            <Route path="/GettingStarted" element={<GettingStarted />} />,
            <Route path="/Placeholder" element={<Placeholder />} />,
            <Route path="*" element={<PageNotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

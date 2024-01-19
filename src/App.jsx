import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

//Project not owned by DreamBerd 3

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
import Shop from './pages/Shop';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="" element={<RootLayout />}>
            <Route index element={<Home />} />,
            <Route path="/Microbots" element={<Microbots />} />,
            <Route path="/Projects" element={<Placeholder />} />,
            <Route path="/Documentation" element={<Placeholder />} />,
            <Route path="/MeetTheTeam" element={<MeetTheTeam />} />,
            <Route path="/Donate" element={<Placeholder />} />,
            <Route path="/GettingStarted" element={<Placeholder />} />,
            <Route path="/Placeholder" element={<Placeholder />} />,
            <Route path="/Shop" element={<Shop />} />,
            <Route path="/*" element={<PageNotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

//Project not owned by DreamBerd 3

// pages
import Home from './pages/Home/Home';
import Microbots from './pages//Microbots/Microbots';
import Projects from './pages/Projects/Projects';
import MeetTheTeam from './pages/MeetTheTeam/MeetTheTeam';
import Donate from './pages/Donate/Donate';
import Shop from './pages/Shop/Shop';
import Placeholder from './pages/Placeholder/Placeholder';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="" element={<RootLayout />}>
            <Route index element={<Home />} />,
            <Route path="/Microbots" element={<Microbots />} />,
            <Route path="/Projects" element={<Projects />} />,
            <Route path="/MeetTheTeam" element={<MeetTheTeam />} />,
            <Route path="/Donate" element={<Placeholder />} />,
            <Route path="/Shop" element={<Placeholder />} />,
            <Route path="/Placeholder" element={<Placeholder />} />,
            <Route path="/*" element={<PageNotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

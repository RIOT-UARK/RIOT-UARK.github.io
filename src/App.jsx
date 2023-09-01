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
        <Route path="/riot-website-" element={<RootLayout />}>
            <Route index element={<Home />} />,
            <Route path="/riot-website-/Microbots" element={<Microbots />} />,
            <Route path="/riot-website-/Projects" element={<Placeholder />} />,
            <Route path="/riot-website-/Documentation" element={<Placeholder />} />,
            <Route path="/riot-website-/MeetTheTeam" element={<MeetTheTeam />} />,
            <Route path="/riot-website-/Donate" element={<Placeholder />} />,
            <Route path="/riot-website-/GettingStarted" element={<Placeholder />} />,
            <Route path="/riot-website-/Placeholder" element={<Placeholder />} />,
            <Route path="/riot-website-/*" element={<PageNotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider basename="/riot-website-" router={router} />;
}

export default App;

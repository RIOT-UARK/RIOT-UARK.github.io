import ResponsiveNavBar from '../components/ResponsiveNavBar';
import { Outlet } from 'react-router-dom';
const RootLayout = () => {
    return (
        <>
            <header>
                <ResponsiveNavBar />
            </header>
            <main>
                <Outlet /> {/* This is where the page content will be rendered! */}
            </main>
        </>
    );
};
export default RootLayout;

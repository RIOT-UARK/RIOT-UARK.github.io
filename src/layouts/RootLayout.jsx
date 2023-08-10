import ResponsiveNavBar from '../components/ResponsiveNavBar';
import { Outlet } from 'react-router-dom';
const RootLayout = () => {
    return (
        <>
            <header>
                <ResponsiveNavBar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};
export default RootLayout;

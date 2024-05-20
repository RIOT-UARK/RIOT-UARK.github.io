import ResponsiveNavBar from '../components/ResponsiveNavBar/ResponsiveNavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/footer';
const RootLayout = () => {
    return (
        <>
            <header>
                <ResponsiveNavBar />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
export default RootLayout;

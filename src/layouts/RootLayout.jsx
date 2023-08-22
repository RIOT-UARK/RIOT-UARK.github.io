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
                <Outlet />]
            </main>
            <Footer></Footer>
        </>
    );
};
export default RootLayout;

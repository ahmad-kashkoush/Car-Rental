// import Footer from "@/ui/Footer";
// import Header from "@/ui/Header";
import { Header, Footer } from '@/components';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="body-overflow flex h-screen flex-col bg-bg-secondary">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default AppLayout;

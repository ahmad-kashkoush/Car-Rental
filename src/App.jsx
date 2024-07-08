import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// router pages
import AppLayout from '@/components/AppLayout';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Home from '@/pages/Home';
import Models from '@/pages/Models';
import Team from '@/pages/Team';
import Testimonials from '@/pages/Testimonials';

const router = createBrowserRouter([
  {
    // route wrapper
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/models', element: <Models /> },
      { path: '/testimonials', element: <Testimonials /> },
      { path: '/team', element: <Team /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;

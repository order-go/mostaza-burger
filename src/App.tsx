import Dashboard from './templates/Dashboard';
import Navbar from './components/organisms/Navbar';
import Footer from './components/organisms/Footer';
import './App.css';
export default function App() {
  return (
    <>
      <Navbar />
      <main className='bg-white relative'>
        <Dashboard />
      </main>
      <Footer />
    </>
  );
}

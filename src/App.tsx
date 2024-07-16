import Dashboard from './templates/Dashboard';
import Navbar from './components/organisms/Navbar';
import Footer from './components/organisms/Footer';
import './App.css';
export default function App() {
  return (
    <div className='flex flex-col min-h-screen relative'>
      <Navbar />
      <main className='relative flex-1'>
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}

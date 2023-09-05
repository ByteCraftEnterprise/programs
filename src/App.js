import Programs from "./pages/programs"
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import './index.css';





function App() {
  return (
    <div>
      <Navbar />
      <Programs />
      <Footer />
    </div>
  );
}

export default App;

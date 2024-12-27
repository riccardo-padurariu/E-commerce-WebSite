import Navbar from '../Components/Navbar/Navbar';
import Main from '../Components/Main/Main';
import Footer from '../Components/Footer/FooterHomePage';
import '../Styles/HomePage.css';

export default function HomePage() {
  return (
    <div className="homepage-container">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
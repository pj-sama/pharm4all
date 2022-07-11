import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Partners from './components/OurPartners/Partners';
import PromisePreview from './components/Promise/PromisePreview';
import Services from './components/Services/Services';
import Slideshow from './components/SlideShow/Slideshow';
function App() {
  return (
    <div>
      <Header />
      <Slideshow />
      <Services />
      <PromisePreview />
      <Partners />
      
      <Footer />
    </div>
  );
}

export default App;

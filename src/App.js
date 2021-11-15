

import About from './components/about/About';
import Intro from './components/intro/Intro';
import ProductList from './components/productList/ProductList';
import Footer from './components/footer/Footer';
import TopBar from './components/topbar/TopBar';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div>
      <TopBar />
      <Intro />
      <About />
      <ProductList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

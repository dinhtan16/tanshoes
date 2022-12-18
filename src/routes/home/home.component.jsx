import Banner from "../../components/home.component/banner/Banner";
import Looking from "../../components/home.component/lookingfor/Looking";
import SlideProducts from "../../components/single-dom/Swiper/SlideProducts";
import "swiper/css/bundle";
import '../../components/single-dom/Swiper/slide.scss'
function App() {
  
  return <div className="App">
    {/* <Directory /> */}
    <Banner />
    <SlideProducts />
  </div>;
}

export default App;

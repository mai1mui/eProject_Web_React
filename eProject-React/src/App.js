import { BrowserRouter, Routes, Route, ServerRouter } from "react-router-dom";

import ProductDetail from "./components/ProductDetail.jsx"
import Layout from "./components/Layout";
import AboutUS from "./components/AboutUs";
import Homepage from "./components/Homepage";
import ProductList from "./components/Products";
import ContactUs from "./components/ContactUs.jsx";
import Feedback from "./components/Feedback.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import New1 from "./components/New1.jsx";
import New2 from "./components/New2.jsx";
import New3 from "./components/New3.jsx";
import New4 from "./components/New4.jsx";
import ProductSearch from "./components/ProductSearch.jsx";
import CustomBottlesSection from "./components/CustomPlasticBot.jsx";
import DeliverySection from "./components/Delivery.jsx";
import PrintingSection from "./components/Printing.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import OrderForm from "./components/Order.jsx";
import Services from "./components/Services.jsx";
import Library from "./components/Library.jsx";


const App = () => {
  
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/AboutUs" element={<AboutUS />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Feedback" element={<Feedback />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/news1" element={<New1 />} />
            <Route path="/news2" element={<New2 />} />
            <Route path="/news3" element={<New3 />} />
            <Route path="/news4" element={<New4 />} />
            <Route path="/product-search" element={<ProductSearch />} /> {/* Route tới trang ProductSearch */}
            <Route path="/Services/Custom" element={<CustomBottlesSection />} />
            <Route path="/Services/Delivery" element={<DeliverySection />} />
            <Route path="/Services/Printing" element={<PrintingSection />} />
            <Route path="/Oder" element={<OrderForm />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Library" element={<Library />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

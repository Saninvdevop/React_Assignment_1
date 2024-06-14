
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
// import News from "./pages/News";
import About from "./pages/About/About";
// import Transactions from "./pages/Transactions";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ProductDetails from "./pages/product/ProductDetails";
import Analytics from "./pages/Analytic/Analytics";
// import products from "./productData";
import Comment from "./pages/Comment/Comment";



function App() {
    return (
        <Router>
            <div className="App">
               
                <Topbar />
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    {/* <Route path="/news" element={<News />} /> */}
                    <Route path="/about" element={<About />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/products/:id" element={<ProductDetails />} /> Add this line
                    <Route path="/comment" element={<Comment />} />
                    {/* <Route path="/transactions" element={<Transactions />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
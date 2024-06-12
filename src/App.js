
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import News from "./pages/News";

// import Transactions from "./pages/Transactions";
import About from "./pages/About";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ProductDetails from "./pages/ProductDetails"; // Import the ProductDetails component
import products from "./productData";
import Analytics from "./pages/Analytics";
import Comment from "./pages/Comment";


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
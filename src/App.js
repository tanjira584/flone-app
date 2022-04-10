import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageHome from "./components/PageHome/PageHome";
import PageShop from "./components/PageShop/PageShop";
import PageCollection from "./components/PageCollection/PageCollection";
import PageBlogs from "./components/PageBlogs/PageBlogs";
import PageContact from "./components/PageContact/PageContact";
import PageAuth from "./components/PageAuth/PageAuth";
import PageCart from "./components/PageCart/PageCart";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<PageHome></PageHome>}></Route>
                <Route path="/shop" element={<PageShop />}></Route>
                <Route
                    path="/collection"
                    element={<PageCollection></PageCollection>}
                ></Route>
                <Route path="/blogs" element={<PageBlogs></PageBlogs>}></Route>
                <Route
                    path="/contact"
                    element={<PageContact></PageContact>}
                ></Route>

                <Route path="/auth" element={<PageAuth></PageAuth>}></Route>
                <Route path="/cart" element={<PageCart></PageCart>}></Route>
            </Routes>
        </div>
    );
}

export default App;

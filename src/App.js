import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { fetchUserData } from "./store/user-actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ProfilePage from "./pages/ProfilePage";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/user/:userId/*" element={<ProfilePage />} />
      {/* <Route path="/welcome" element={<Welcome />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<ProductDetail />} /> */}
    </Routes>
  );
}

export default App;

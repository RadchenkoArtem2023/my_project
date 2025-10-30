import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";
import CreateRoom from "./screens/CreateRoom/CreateRoom";
import AddParticipantInfo from "./screens/AddParticipantInfo/AddParticipantInfo";
import AddWishesWishlistNotFilled from "./screens/AddWishesWishlistNotFilled/AddWishesWishlistNotFilled";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-room" element={<CreateRoom />} />
        <Route path="/add-participant" element={<AddParticipantInfo />} />
        <Route path="/add-wishlist" element={<AddWishesWishlistNotFilled />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

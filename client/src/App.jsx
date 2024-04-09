import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/books" element={<h1>Book List</h1>} />
        <Route path="/add-book" element={<h1>Add Book</h1>} />
        <Route path="/book/:id" element={<h1>Book ID</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

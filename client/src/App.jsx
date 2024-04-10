import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import { BookProvider } from "./context/BookContext";
import ProtectedRoutes from "../ProtectedRoutes";
import BookList from "./pages/BookList";
import AddBooks from "./pages/AddBooks";
import UpdateBook from "./pages/UpdateBook";

function App() {
  return (
    <AuthProvider>
      <BookProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/books" element={<BookList />} />
              <Route path="/add-book" element={<AddBooks />} />
              <Route path="/books/:id" element={<UpdateBook />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BookProvider>
    </AuthProvider>
  );
}
export default App;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BookList.css";
import { useBook } from "../context/BookContext";

function BookList() {
  const { getBooks, books, deleteBook } = useBook();
  const navigate = useNavigate();
  const userToken = localStorage.getItem("user data");

  async function removeBook(id) {
    await deleteBook(id);
    getBooks();
  }

  function closeSesion() {
    if (userToken) {
      localStorage.removeItem("user data");
      return navigate("/login", { replace: true });
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="container">
      <div>
        <h1 className="title">Book List</h1>
        <div className="buttons">
          <button className="addBook" onClick={() => navigate("/add-book")}>
            Agregar Libro
          </button>
          <button className="logout" onClick={() => closeSesion()}>
            Cerrar sesion
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>title</th>
              <th>author</th>
              <th>publicationYear</th>
              <th>state</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{new Date(book.publicationYear).getFullYear()}</td>
                <td>{book.state}</td>
                <td>
                  {
                    <button
                      onClick={() =>
                        navigate(`/books/:${book._id}`, {
                          state: book,
                        })
                      }
                    >
                      Editar
                    </button>
                  }
                </td>
                <td>
                  {
                    <button
                      onClick={() => {
                        removeBook(book._id);
                      }}
                    >
                      Eliminar
                    </button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookList;

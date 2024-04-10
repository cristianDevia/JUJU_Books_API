import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";

import "../styles/LoginPage.css";
import { useBook } from "../context/BookContext";

function UpdateBook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { updateBook } = useBook();
  const navigate = useNavigate();

  const location = useLocation();
  const { author, publicationYear, state, title, _id } = location.state;

  const onSubmit = handleSubmit((data) => {
    updateBook(_id, data);
    navigate("/books");
  });

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="signUpTitle"> Actualiza un libro </h1>
        <form className="form" onSubmit={onSubmit}>
          <input
            type="String"
            placeholder="titulo"
            {...register("title", {
              value: title,
            })}
          ></input>

          {errors.title && (
            <p className="form-errors">El titulo es requerido</p>
          )}

          <input
            type="String"
            placeholder="Autor"
            {...register("author", { value: author })}
          ></input>

          {errors.author && (
            <p className="form-errors">El Autor es requerido</p>
          )}

          <input
            type="String"
            placeholder="Año de publicacion"
            {...register("publicationYear", { value: publicationYear })}
          ></input>

          {errors.publicationYear && (
            <p className="form-errors">El Año de publicacion es requerido</p>
          )}

          <input
            type="String"
            placeholder="Estado"
            {...register("state", { value: state })}
          ></input>

          {errors.state && (
            <p className="form-errors">El estado es requerido</p>
          )}

          <button>Guardar</button>
        </form>
      </div>
    </div>
  );
}
export default UpdateBook;

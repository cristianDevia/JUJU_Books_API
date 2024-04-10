import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import "../styles/LoginPage.css";
import { useBook } from "../context/BookContext";

function AddBooks() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createBook } = useBook();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    createBook(data);
    navigate("/books");
  });

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="signUpTitle"> Agrega un libro </h1>
        <form className="form" onSubmit={onSubmit}>
          <input
            type="String"
            {...register("title", { required: true })}
            placeholder="titulo"
          ></input>

          {errors.title && (
            <p className="form-errors">El titulo es requerido</p>
          )}

          <input
            type="String"
            {...register("author", { required: true })}
            placeholder="Autor"
          ></input>

          {errors.author && (
            <p className="form-errors">El Autor es requerido</p>
          )}

          <input
            type="String"
            {...register("publicationYear", { required: true })}
            placeholder="Año de publicacion"
          ></input>

          {errors.publicationYear && (
            <p className="form-errors">El Año de publicacion es requerido</p>
          )}

          <input
            type="String"
            {...register("state", { required: true })}
            placeholder="Estado"
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
export default AddBooks;

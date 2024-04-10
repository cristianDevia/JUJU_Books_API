import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, isAuthenticated, errorMessage } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    signIn(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/books");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="signUpTitle"> Inicia sesion </h1>
        <form className="form" onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="email"
          ></input>

          {errors.email && (
            <p className="form-errors">El correo es requerido</p>
          )}

          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="password"
          ></input>

          {errors.password && (
            <p className="form-errors">La contraseña es requerida</p>
          )}

          <button>Inicio de sesion</button>
          <a href="/register" className="haveAcount">
            No tienes Cuenta ? Registrate
          </a>
        </form>
        {errorMessage && <p className="token-error">{errorMessage}</p>}
      </div>
    </div>
  );
}
export default LoginPage;

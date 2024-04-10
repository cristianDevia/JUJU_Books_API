import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../styles/RegisterPage.css";
import { useAuth } from "../context/AuthContext";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUp, isAuthenticated, errorMessage } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    signUp(data);
    navigate("/login");
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="signUpTitle"> Crea tu cuenta </h1>
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

          <button>Registro</button>

          <a href="/login" className="haveAcount">
            Ya tienes cuenta ? Inicia sesion
          </a>
        </form>
        {errorMessage && <p className="token-error">{errorMessage}</p>}
      </div>
    </div>
  );
}
export default RegisterPage;

import { useForm } from "react-hook-form";
import "../styles/RegisterPage.css";
import { registerUser } from "../api/auth";

function RegisterPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    await registerUser(values);
  });

  return (
    <div className="container">
      <div className="form-container">
        <form className="form" onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="email"
          ></input>
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="password"
          ></input>
          <button>Registro</button>
          <a href="/login" className="haveAcount">
            Ya tienes cuenta ? Inicia sesion
          </a>
        </form>
      </div>
    </div>
  );
}
export default RegisterPage;

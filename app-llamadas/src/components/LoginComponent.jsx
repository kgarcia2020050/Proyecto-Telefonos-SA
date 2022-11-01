import useForm from "../hooks/useForm";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const LoginComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("token") != null ||
      localStorage.getItem("token") != undefined
    ) {
      navigate("/history");
    }
  }, []);

  const { formValues, handleInputChange } = useForm({
    username: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/service/login", formValues)
      .then(({ data }) => {
        localStorage.setItem("userId", data[0]);
        localStorage.setItem("token", data[1]);
        Swal.fire({
          icon: "success",
          title: "¡Éxito!",
          text: "Usuario Logueado.",
        }).then(() => {
          navigate("/home");
        });
      })
      .catch(({ response }) => {
        Swal.fire({
          icon: "error",
          text: response.data.message,
        });
      });
  };

  const { username, password } = formValues;

  return (
    <>
      <div>
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://img.freepik.com/vector-premium/icono-centro-llamadas_677077-3169.jpg?w=2000"
                  className="img-fluid"
                  alt="Sample image"
                  height={100}
                  width={350}
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <div className="form-outline mb-4">
                    <input
                      type={"text"}
                      onChange={handleInputChange}
                      name="username"
                      value={username}
                      required
                      was-validated="true"
                      className="form-control form-control-lg"
                      placeholder="Ingresa tu nombre de usuario"
                    />
                    <label className="form-label" htmlFor="email">
                      Username
                    </label>
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type={"password"}
                      onChange={handleInputChange}
                      name="password"
                      value={password}
                      className="form-control form-control-lg"
                      placeholder="Ingresa tu clave"
                      required
                    />
                    <label className="form-label" htmlFor="password">
                      Clave
                    </label>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      disabled={username === "" || password === ""}
                      onClick={login}
                      className="btn btn-primary btn-lg"
                    >
                      Iniciar sesion
                    </button>
                    <h4 className="small fw-bold mt-2 pt-1 mb-0">
                      No tienes una cuenta?{" "}
                      <Link className="nav-link" to="/register">
                        <h4 className="link-danger">Registrate</h4>
                      </Link>
                    </h4>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
            <div className="text-white mb-3 mb-md-0">
              Copyright © 2022. Todos los derechos reservados.
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginComponent;

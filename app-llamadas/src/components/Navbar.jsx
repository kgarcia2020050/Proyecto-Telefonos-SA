import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/Context";
const Navbar = () => {
  const { value, setValue } = useContext(DataContext);
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img
            src={
              "https://img.freepik.com/vector-premium/icono-centro-llamadas_677077-3169.jpg?w=2000"
            }
            alt="Logo"
            width={50}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              {value == 0 || value == 1 ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    Iniciar llamadas
                  </Link>
                </li>
              ) : null}
              <li className="nav-item">
                <Link className="nav-link" to="/history">
                  Historial de llamadas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/myCalls">
                  Llamadas de hoy
                </Link>
              </li>
              {value == 2 ? (
                <Link
                  onClick={() => {
                    setValue(0);
                    localStorage.clear();
                  }}
                  className="nav-link"
                  to="/login"
                >
                  Cerrar sesion
                </Link>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

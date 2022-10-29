import { types } from "../helpers/types";
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { DataContext } from "../context/Context";
import AxiosPost from "../helpers/AxiosPost";
import AxiosPut from "../helpers/AxiosPut";
import Navbar from "./Navbar";
const CallsComponent = () => {
  const { value, setValue } = useContext(DataContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("token") === null ||
      localStorage.getItem("token") === undefined
    ) {
      navigate("/login");
    }
  }, []);

  const { formValues, handleInputChange, setFormValues } = useForm({
    number: "",
    numberDescription: "",
    type: "",
    solution: "",
    startTime: "",
    startDay: "",
    userId: localStorage.getItem("userId"),
  });

  const { number, numberDescription, solution } = formValues;

  return (
    <>
      <Navbar />
      {value == 0 ? (
        <button
          onClick={() => {
            localStorage.setItem("state", 1);
            setValue(localStorage.getItem("state"));
            setFormValues({
              ...formValues,
              startDay: new Date().toLocaleTimeString(),
            });

            console.log(formValues.startDay);
          }}
          className="btn btn-success"
        >
          Iniciar jornada
        </button>
      ) : null}
      {value != 0 && value != 2 ? (
        <button
          onClick={() => {
            setFormValues({
              ...formValues,
              startTime: new Date().toLocaleTimeString(),
            });
          }}
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Iniciar llamada
        </button>
      ) : null}
      {value == 1 ? (
        <>
          <button
            onClick={() => {
              localStorage.setItem("state", 2);
              setValue(localStorage.getItem("state"));
              AxiosPut("calls/udpateCalls");
              navigate("/history");
            }}
            className="btn btn-danger"
          >
            Finalizar jornada
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Llamada iniciada
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form id="myform">
                    <div className="form">
                      <div className="form-body">
                        <div className="row mb-4">
                          <div className="col">
                            <div className="form-outline">
                              <div>
                                <input
                                  value={number}
                                  onChange={handleInputChange}
                                  className="form-control"
                                  type="number"
                                  required
                                  placeholder="Ingresar numero"
                                  name="number"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-outline">
                              <input
                                value={numberDescription}
                                onChange={handleInputChange}
                                name="numberDescription"
                                type="text"
                                className="form-control"
                                placeholder="Descripcion del numero"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row mb-4">
                          <div className="col">
                            <div className="form-outline">
                              <select
                                name="type"
                                className="form-control"
                                type="text"
                                required
                                onChange={handleInputChange}
                              >
                                {types.map((type) => (
                                  <option
                                    defaultValue={types[0].value}
                                    key={type.value}
                                    value={type.value}
                                  >
                                    {type.label}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-outline">
                              <input
                                value={solution}
                                onChange={handleInputChange}
                                name="solution"
                                type="text"
                                className="form-control"
                                required
                                placeholder="Solucion"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                  <button
                    disabled={
                      number === "" ||
                      numberDescription === "" ||
                      solution === ""
                    }
                    data-bs-dismiss="modal"
                    onClick={() => {
                      AxiosPost(
                        "calls/saveCall",
                        formValues,
                        "Llamada realizada con exito."
                      );
                    }}
                    type="button"
                    className="btn btn-primary"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CallsComponent;

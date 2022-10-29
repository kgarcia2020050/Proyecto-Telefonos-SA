import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const AddCallsComponent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [call, setCall] = useState({
    id: "",
    number: "",
    numberDescription: "",
    type: "",
    solution: "",
  });
  useEffect(() => {
    if (
      localStorage.getItem("token") === null ||
      localStorage.getItem("token") === undefined
    ) {
      navigate("/login");
    } else {
      axios
        .get(
          `http://localhost:8080/calls/getUserCalls/${localStorage.getItem(
            "userId"
          )}`,
          {
            headers: { Authorization: `${localStorage.getItem("token")}` },
          }
        )
        .then((res) => {
          setData(res.data);
        });
    }
  }, []);

  return (
    <>
      <Navbar />
      {data.length > 0 ? (
        <>
          <section className="vh-100">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-9 col-xl-7">
                  <div className="card rounded-3">
                    <div className="card-body p-4">
                      <h4 className="text-center my-3 pb-3">Llamadas de hoy</h4>
                      <table className="table mb-4">
                        <thead>
                          <tr>
                            <th scope="col">Hora de inicio</th>
                            <th scope="col">Hora de fin</th>
                            <th scope="col">Opciones</th>
                          </tr>
                        </thead>
                        {data.map((datos) => {
                          return (
                            <tbody key={datos.id}>
                              <tr>
                                <td>{datos.startTime}</td>
                                <td>{datos.finishTime}</td>
                                <td>
                                  <button
                                    onClick={() => {
                                      axios
                                        .get(
                                          `http://localhost:8080/calls/call/${
                                            datos.id
                                          }/${localStorage.getItem("userId")}`,
                                          {
                                            headers: {
                                              Authorization: `${localStorage.getItem(
                                                "token"
                                              )}`,
                                            },
                                          }
                                        )
                                        .then(({ data }) => {
                                          setCall(data);
                                        });
                                    }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    className="btn btn-outline-primary"
                                  >
                                    <i className="fa-solid fa-eye">
                                      Ver llamada
                                    </i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          );
                        })}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{" "}
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
                  <h5 className="modal-title" id="exampleModalLabel">
                    Info de llamada
                  </h5>
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
                                  value={call.number}
                                  readOnly
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
                                value={call.numberDescription}
                                readOnly
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
                              <input
                                value={call.type}
                                readOnly
                                name="solution"
                                type="text"
                                className="form-control"
                                required
                                placeholder="Solucion"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-outline">
                              <input
                                value={call.solution}
                                readOnly
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
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h2>Hoy no has contestado llamadas.</h2>
      )}
    </>
  );
};

export default AddCallsComponent;

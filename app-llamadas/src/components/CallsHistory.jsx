import Navbar from "./Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CallsHistory = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");

  const [calls, setCalls] = useState([]);

  const getData = () => {
    axios
      .get(
        `http://localhost:8080/calls/getCalls/${localStorage.getItem(
          "userId"
        )}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then(({ data }) => {
        setData(data);
      });
  };

  useEffect(() => {
    if (
      localStorage.getItem("token") == null ||
      localStorage.getItem("token") == undefined
    ) {
      navigate("/login");
    } else {
      getData();
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
                      <h4 className="text-center my-3 pb-3">
                        Llamadas realizadas
                      </h4>
                      <br />
                      <table className="table mb-4">
                        <thead>
                          <tr>
                            <td scope="col">Fecha</td>
                            <td scope="col">Jornada</td>
                            <th scope="col">Opciones</th>
                          </tr>
                        </thead>
                        {data.map((datos, id) => (
                          <tbody key={id}>
                            <tr>
                              <td>{datos.date}</td>
                              <td>
                                De {datos.startDay} a {datos.finishDay}
                              </td>
                              <td>
                                <button
                                  onClick={() => {
                                    axios
                                      .get(
                                        `http://localhost:8080/calls/callsByDate/${localStorage.getItem(
                                          "userId"
                                        )}/${datos.date}`,
                                        {
                                          headers: {
                                            Authorization: `${localStorage.getItem(
                                              "token"
                                            )}`,
                                          },
                                        }
                                      )
                                      .then(({ data }) => {
                                        setDate(data[0].date);
                                        setCalls(data);
                                      });
                                  }}
                                  type="button"
                                  className="btn btn-primary"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalXl"
                                >
                                  <i className="fa-solid fa-eye">
                                    Ver llamadas
                                  </i>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        ))}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{" "}
          <div
            className="modal fade"
            id="exampleModalXl"
            tabIndex="-1"
            aria-labelledby="exampleModalXlLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <section className="vh-100">
                <div className="container py-5 h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-9 col-xl-7">
                      <div className="card rounded-3">
                        <div className="card-body p-4">
                          <h4 className="text-center my-3 pb-3">
                            Llamadas del {date}
                          </h4>
                          <table className="table mb-4">
                            <thead>
                              <tr>
                                <th scope="col">Inicio</th>
                                <th scope="col">Fin</th>
                                <th scope="col">Numero</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Solucion</th>
                              </tr>
                            </thead>
                            {calls.map((call, id) => {
                              return (
                                <tbody key={id}>
                                  <tr>
                                    <td>{call.startTime}</td>
                                    <td>{call.finishTime}</td>
                                    <td>{call.number}</td>
                                    <td>{call.numberDescription}</td>
                                    <td>{call.type}</td>
                                    <td>{call.solution}</td>
                                    <td></td>
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
              </section>
            </div>
          </div>
        </>
      ) : (
        <h2>No has realizado ninguna llamada.</h2>
      )}
    </>
  );
};

export default CallsHistory;

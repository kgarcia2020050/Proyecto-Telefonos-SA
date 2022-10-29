import axios from "axios";

const AxiosPut = (route) => {
  axios
    .put(
      `http://localhost:8080/${route}/${localStorage.getItem("userId")}`,
      "",
      {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      }
    )
    .then(() => {
      console.log("exito");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default AxiosPut;

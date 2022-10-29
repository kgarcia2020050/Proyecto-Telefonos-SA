import axios from "axios";
import Swal from "sweetalert2";

const AxiosPost = (route, obj, msj) => {
  axios
    .post(`http://localhost:8080/${route}`, obj, {
      headers: { Authorization: `${localStorage.getItem("token")}` },
    })
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "¡Éxito!",
        text: msj,
      });
    }).catch(({response})=>{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response.data.errors[0].defaultMessage,
      });
    });
};

export default AxiosPost;

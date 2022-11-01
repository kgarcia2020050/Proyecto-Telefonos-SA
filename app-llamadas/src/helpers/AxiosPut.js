import axios from "axios";

const AxiosPut = (route) => {
  axios.put(
    `http://localhost:8080/${route}/${localStorage.getItem("userId")}`,
    "",
    {
      headers: { Authorization: `${localStorage.getItem("token")}` },
    }
  );
};

export default AxiosPut;

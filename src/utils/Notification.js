import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = (message, type) => {
  toast[`${type}`](`${message}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default Notification;

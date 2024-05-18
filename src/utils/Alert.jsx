import { toast } from "react-hot-toast";

const Alert = (data) => {
  toast.success(data, {
    style: {
      border: "1px solid green",
    },
  });
};
export default Alert;

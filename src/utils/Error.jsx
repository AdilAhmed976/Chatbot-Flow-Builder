import { toast } from "react-hot-toast";

const Error = (data) => {
  toast.error(data, {
    style: {
      border: "1px solid red",
    },
  });
};
export default Error;

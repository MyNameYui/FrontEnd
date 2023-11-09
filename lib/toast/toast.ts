import { toast } from "react-hot-toast";

const successToast = ({ text }: { text: string }) =>
  toast.success(text, {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });

const errorToast = ({ text }: { text: string }) =>
  toast.error(text, {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });

export { errorToast, successToast };

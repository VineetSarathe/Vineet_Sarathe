import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        theme="light"
        toastStyle={{
          width: "250px",
          height: "50px",
          fontSize: "14px",
        }}
      />
      <AppRoutes />
    </>
  );
}

export default App;
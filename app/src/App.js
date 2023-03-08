import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { GlobalUserProvider } from "./context/user/user.context";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <GlobalUserProvider>
        <RouterProvider router={router} />
        <ToastContainer theme='dark'/>
      </GlobalUserProvider>
    </div>
  );
}

export default App;

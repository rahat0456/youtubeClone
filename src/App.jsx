import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loading from "./components/loading.jsx";
import { useAuth } from "./context/Auth.jsx";

function App() {
  const { load } = useAuth();
  return (
    <>
      {load && <Loading />}
      <Navbar />

      <Outlet />
    </>
  );
}

export default App;

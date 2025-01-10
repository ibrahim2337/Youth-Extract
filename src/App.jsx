import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;

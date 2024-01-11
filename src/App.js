import Footer from "./conponents/Footer";
import Header from "./conponents/Header";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />

      <Footer />
    </>
  );
}

export default App;

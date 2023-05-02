import { Header } from "./components/commons/Header";
import { Footer } from "./components/commons/Footer";
import { MainRoutes } from "./routes/MainRoutes";
const App = () => {
  return (
    <>
      <Header></Header>
      <MainRoutes />
      <Footer></Footer>
    </>
  );
};

export default App;

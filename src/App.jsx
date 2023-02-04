import "./App.css";
import { Footer } from "./components/footer";
import { Home } from "./components/home";

function App() {
  return (
    <>
      <div className="container">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;

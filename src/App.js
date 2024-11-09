import YubuNavBar from "./components/YubuNavBar";
import YubuBanner from "./components/YubuBanner";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Insta from "./components/Insta";

function App() {
  return (
    <div className="App">
      <YubuNavBar />
      <YubuBanner />
      <Insta />
    </div>
  );
}

export default App;

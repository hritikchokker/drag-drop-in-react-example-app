import logo from "./logo.svg";
import "./App.scss";
import MainWrapper from "./views/MainWrapper";
import RightMenu from "./components/RightMenu";

function App() {
  return (
    <div className="container">
      <div className="left_side"></div>
      <div className="main_side">
        <MainWrapper />
      </div>
      <div className="right_side">
        <RightMenu />
      </div>
    </div>
  );
}

export default App;

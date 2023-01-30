import "./styles/App.css";
import Introduction from "./components/Introduction";
import Information from "./components/Information";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Introduction />
        <Information />
      </div>
    </>
  );
}

export default App;

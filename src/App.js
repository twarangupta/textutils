import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar t itle="TextUtils" aboutText="About Us" /> */}
      <Navbar title={"TextUtils"}/>
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" />
      </div>
    </> 
  );
}

export default App; 
 
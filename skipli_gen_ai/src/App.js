import "./App.css";
import PhoneAuthentication from "./pages/PhoneAuthentication";
import CodeAuthentication from "./pages/CodeAuthentication";
import DashBoard from "./pages/DashBoard";
import StartFormScratch from "./pages/StartFromScratch";
import GenerateFromScratch from "./pages/GenerateFromScratch";
import StartFromInspire from "./pages/StartFromInspire";
import GeneratedFromInspire from "./pages/GeneratedFromInspire";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="base">
      <PhoneAuthentication></PhoneAuthentication>
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import GetUserComponent from "./components/GetUserComponent";

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        {isLogedIn ? (
          <WelcomePage user={user} setIsLogedIn={setIsLogedIn} />
        ) : (
          <GetUserComponent setUser={setUser} setIsLogedIn={setIsLogedIn} />
        )}
      </header>
    </div>
  );
}

export default App;

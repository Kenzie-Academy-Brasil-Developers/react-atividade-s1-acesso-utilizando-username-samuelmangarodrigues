import { useState } from "react";
import "./style.css";

const GetUserComponent = ({ setUser, setIsLogedIn }) => {
  const [userInput, setuserInput] = useState("");
  const HandleLogin = () => {
    setIsLogedIn(true);
    setUser(userInput);
  };
  return (
    <>
      <form>
        <h1 className="Title">Entre com seu nome </h1>
        <input
          className="Inpt"
          value={userInput}
          placeholder="Digite seu Nome "
          onChange={(e) => setuserInput(e.target.value)}
        ></input>
      </form>
      <button className="BtnsLog" onClick={() => HandleLogin(userInput)}>
        Entrar
      </button>
    </>
  );
};
export default GetUserComponent;

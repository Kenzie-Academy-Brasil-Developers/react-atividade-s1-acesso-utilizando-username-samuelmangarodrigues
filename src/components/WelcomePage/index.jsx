const WelcomePage = ({ user, setIsLogedIn }) => {
  const HandleLogout = () => {
    setIsLogedIn(false);
  };
  return (
    <>
      <h1 className="TitleLog">Seja bem vindo {user}</h1>
      <button className="BtnsExit" onClick={HandleLogout}>
        Sair
      </button>
    </>
  );
};
export default WelcomePage;

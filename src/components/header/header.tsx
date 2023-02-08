import "./header.scss";
export function Header() {
  return (
    <header className="header">
      <div>
        <img
          src="/logo.png"
          alt="Logo of game of thrones"
          className="header__img"
          width="100px"
        />
      </div>
      <h1 className="header__title">Card game</h1>
    </header>
  );
}

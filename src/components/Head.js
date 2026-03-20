import { Link } from "react-router-dom";

function Head() {
  return (
    <div className="head">
      <Link to="/">Новости</Link>
      <Link to="/about">О проекте</Link>
      <Link to="/contacts">Контакты</Link>
    </div>
  );
}

export default Head;

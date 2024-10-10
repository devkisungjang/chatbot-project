import "../styles/Main.scss";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main-wrapper">
      <h1 className="title">챗봇</h1>
      <p className="content">아래 버튼을 눌러 시작하세요</p>
      <Link to="/select">
        <button className="btn">시작</button>
      </Link>
    </div>
  );
};

export default Main;

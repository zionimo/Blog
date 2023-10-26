import { Link } from "react-router-dom";
import Register from "./Register";

const Login = () => {
  return (
    <div className="auth">
      <form>
        <h1>로그인</h1>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <button>로그인</button>
        <p>등록된 아이디가 없습니다.</p>
        <span>
          아이디가 없으신가요? <Link to="/register">
            회원가입
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;

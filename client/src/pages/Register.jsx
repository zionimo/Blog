import { Link } from "react-router-dom";

const Register = () => {
  return (  <div className="auth">
  <form>
    <h1>회원가입</h1>
    <input required type="text" placeholder="아이디" />
    <input required type="email" placeholder="이메일" />
    <input required type="password" placeholder="비밀번호" />
    <input required type="password" placeholder="비밀번호 확인" />
    <button>회원가입</button>
    <p>등록된 아이디가 없습니다.</p>
    <span>
      아이디가 있으신가요? <Link to="/login">
        로그인
      </Link>
    </span>
  </form>
</div> );
}
 
export default Register;
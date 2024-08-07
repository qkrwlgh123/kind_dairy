import { useState } from "react";
import Style from "./login.style";
import { handleRequestLogin } from "../../api/user/login";
import { useNavigate } from "react-router-dom";
import { UserLoginInfo } from "../../types/user";
import useAuthStore from "../../store/authStore";

const Login = () => {
  const navigate = useNavigate();

  /** 로그인 성공 시, 상태 갱신하는 zustand 함수 */
  const { loginSuccess } = useAuthStore();

  /** 로그인 유저 정보 입력 상태 */
  const [userInfo, setUserInfo] = useState<UserLoginInfo>({
    name: "",
    password: "",
  });

  /** 유저 이름 입력 함수 */
  const handleTypeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prev) => ({ ...prev, name: event.target.value }));
  };

  /** 유저 비밀번호 입력 함수 */
  const handleTypePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prev) => ({ ...prev, password: event.target.value }));
  };

  /** 로그인 요청 함수 */
  const handleLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!userInfo.name || !userInfo.password) {
      alert("로그인 정보를 입력해주세요.");
      return;
    }

    const loginResult = await handleRequestLogin(userInfo);

    /** 로그인 성공 시 */
    if (loginResult.code === 200) {
      loginSuccess(loginResult.data, userInfo.name);
      navigate("/", { replace: true });
    } else {
      alert("로그인 정보를 다시 확인해주세요.");
    }
  };

  return (
    <Style.LoginContainer>
      <h1>로그인</h1>
      <div>
        <Style.Input
          placeholder="계정"
          value={userInfo.name}
          autoComplete="username"
          onChange={handleTypeUserName}
          autoCapitalize="off"
        />
      </div>
      <div>
        <Style.Input
          placeholder="비밀번호"
          value={userInfo.password}
          type="password"
          onChange={handleTypePassword}
          autoComplete="current-password"
        />
      </div>
      <div>
        <Style.SubmitButton onClick={handleLogin}>로그인</Style.SubmitButton>
      </div>
    </Style.LoginContainer>
  );
};

export default Login;

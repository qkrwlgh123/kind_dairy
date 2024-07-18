import { useEffect, useRef, useState } from "react";
import useStore from "../../store/authStore";
import ThemeToggleBtn from "./themeToggleBtn/themeToggleBtn";
import Style from "./utilsBox.style";

const UtilsBox = ({
  themeMode,
  handleFunc,
}: {
  themeMode: string | number;
  handleFunc: () => void;
}) => {
  /** 로그아웃으로 상태 갱신하는 함수 */
  const { isLoggedIn, logOut } = useStore();

  /** 로그아웃 함수 */
  const handleLogout = () => {
    logOut();
  };

  /** UtilsBox를 참조하는 useRef */
  const utilsBoxRef = useRef<HTMLDivElement>(null);

  /** UtilsBox의 visible 상태를 결정하는 useState */
  const [isVisible, setIsVisible] = useState(true);

  /** 스크롤 위치에 따라 UtilsBox visible 상태 변경하는 effect */
  useEffect(() => {
    const handleScroll = () => {
      const utilsBox = utilsBoxRef.current!;
      if (!utilsBox) return;

      const scrollPosition = window.scrollY;

      if (scrollPosition > 55) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Style.UtilsBox ref={utilsBoxRef} $isVisible={isVisible}>
      <Style.IconBox>
        <ThemeToggleBtn themeMode={themeMode} handleFunc={handleFunc} />
      </Style.IconBox>
      {isLoggedIn && (
        <Style.LogoutButton onClick={handleLogout}>로그아웃</Style.LogoutButton>
      )}
    </Style.UtilsBox>
  );
};

export default UtilsBox;

import "../styles/Header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <section className="headerFather">
      <img src="/logo.png" alt="logo" onClick={() => navigate("/")} />
    </section>
  );
};

import { useNavigate } from "react-router-dom";
import "./components.css";

function Header() {
  console.log(window.innerWidth)
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-row socials">
        <a
          className={`shadow-lg p-3 ${window.innerWidth < 600 ? "m-3" : "fa-lg m-5"}`}
          style={{ borderRadius: "20px" }}
          onClick={() => navigate("/")}
        >
          <i
            className="fa-solid fa-house text-decoration-none"
            style={{ color: "black" }}
          ></i>
        </a>
        <a
          onClick={() => navigate("/profile")}
          className={`shadow-lg p-3 ${window.innerWidth < 600 ? "m-3" : "fa-lg m-5"}`}
          style={{ borderRadius: "20px" }}
        >
          <i
            className="fa-solid fa-circle-info text-decoration-none"
            style={{ color: "black" }}
          ></i>
        </a>
        <a
          onClick={() => navigate("/projects")}
          className={`shadow-lg p-3 ${window.innerWidth < 600 ? "m-3" : "fa-lg m-5"}`}
          style={{ borderRadius: "20px" }}
        >
          <i
            className="fa-regular fa-folder-open text-decoration-none"
            style={{ color: "black" }}
          ></i>
        </a>
        <a
          onClick={() => navigate("/contact")}
          className={`shadow-lg p-3 ${window.innerWidth < 600 ? "m-3" : "fa-lg m-5"}`}
          style={{ borderRadius: "20px" }}
          
        >
          <i
            className="fa-solid fa-phone text-decoration-none"
            style={{ color: "black" }}
          ></i>
        </a>
      </div>
    </div>
  );
}

export default Header;

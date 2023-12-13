import profilePic from "./../assets/profilepic.jpg";
import "./components.css";

function Home() {

  return (
    <div className="d-flex flex-column justify-content-center align-items-center m-5 home">
      <div className="border shadow-lg rounded-circle ">
        <img
          style={{ maxHeight: "30vh", maxWidth: "30vh" }}
          className=" rounded-circle"
          src={profilePic}
        ></img>
      </div>
      <div className="display-5 m-3">Kushal Todi</div>
      <div className="">Software Developer</div>
      <div className="d-flex flex-row socials mt-3">
        <a
          href="https://www.linkedin.com/in/kushaltodi/"
          className={`shadow-lg p-3 ${
            window.innerWidth < 600 ? "m-3" : "fa-xl m-5"
          }`}
          style={{ borderRadius: "20px" }}
        >
          <i
            className="fa-brands fa-linkedin text-decoration-none"
            style={{ color: "black" }}
          ></i>
        </a>
        <a
          href="https://github.com/kushaltodi"
          className={`shadow-lg p-3 ${
            window.innerWidth < 600 ? "m-3" : "fa-xl m-5"
          }`}
          style={{ borderRadius: "20px" }}
        >
          <i
            className="fa-brands fa-github text-decoration-none"
            style={{ color: "black" }}
          ></i>
        </a>
        <a
          href="https://www.instagram.com/_kushal_todi_/"
          className={`shadow-lg p-3 ${
            window.innerWidth < 600 ? "m-3" : "fa-xl m-5"
          }`}
          style={{ borderRadius: "20px" }}
        >
          <i
            className="fa-brands fa-instagram text-decoration-none"
            style={{ color: "black" }}
          ></i>
        </a>
        <a
          href="https://drive.google.com/file/d/1WbnCG5qkYqfZ9IvkdOhXgQySWlUBDPCc/view?usp=sharing"
          className={`shadow-lg p-3 ${
            window.innerWidth < 600 ? "m-3" : "fa-xl m-5"
          }`}
          style={{ borderRadius: "20px" }}
        >
          <i
            className="fa-solid fa-file text-decoration-none"
            style={{ color: "black" }}
          ></i>
        </a>
      </div>
    </div>
  );
}

export default Home;

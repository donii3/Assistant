import { Link, Outlet, useNavigate } from "react-router-dom";
import "./guestLayout.css";

const GuestLayout = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleUserClick = () => {
    if (!user) {
      navigate("/login"); // Redirect to login only if the user is not logged in
    }
  };

  return (
    <div className="guestLayout">
      <header>
        <Link to="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>Assistant</span>
        </Link>
        <div
          className="user"
          onClick={handleUserClick}
          style={{ cursor: user ? "default" : "pointer" }}
        >
          Login
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default GuestLayout;
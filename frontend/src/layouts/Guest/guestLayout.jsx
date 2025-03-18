import { Link, Outlet, useNavigate } from "react-router-dom";
import "./guestLayout.css";

const GuestLayout = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="guestLayout">
      <header>
        <Link to="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>Assistant</span>
        </Link>

        {/* Only show login button if user is not logged in */}
        {!user && (
          <div
            className="user"
            onClick={handleLoginClick}
            style={{ cursor: "pointer" }}
          >
            Login
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default GuestLayout;

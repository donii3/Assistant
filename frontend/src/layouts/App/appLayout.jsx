import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./appLayout.css";

const AppLayout = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [user, navigate]);

  if (!user) return null; // Prevent rendering if not authenticated

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="appLayout">
      <header>
        <div className="menu">MENU</div>
        <div
          className="user"
          onClick={handleLogout}
          style={{ cursor: "pointer" }}
        >
          {user.username}
        </div>
      </header>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;

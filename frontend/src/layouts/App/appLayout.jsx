import { Outlet } from "react-router-dom";
import "./appLayout.css";

const AppLayout = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="appLayout">
      <header>
        <div className="menu">MENU</div>
        <div className="user">{user ? user.username : "Guest"}</div>
      </header>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
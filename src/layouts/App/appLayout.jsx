import { Outlet } from "react-router-dom";
import "./appLayout.css";

const AppLayout = () => {
  return (
    <div className="appLayout">
      AppLayout
      <div className="menu">MENU</div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;

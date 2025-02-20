import { Link, Outlet } from "react-router-dom";
import "./guestLayout.css";

const GuestLayout = () => {
  return (
    <div className="guestLayout">
      
      <header>
        <Link to="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>Assistant</span>
        </Link>
        <div className="user">User</div>
      </header>

      <main>
        <Outlet />
      </main>

    </div>
  );
};

export default GuestLayout;

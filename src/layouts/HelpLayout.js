import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Welcome Help</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        veniam ducimus eligendi nihil
      </p>

      <nav>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};
export default HelpLayout;

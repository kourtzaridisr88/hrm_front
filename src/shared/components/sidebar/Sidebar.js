import './sidebar.css';
import { Link } from "react-router-dom";
import { NavLink, Nav } from "reactstrap";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      <div className="sidebar__header">
        <h3 className="sidebar__header-title">HRM</h3>
      </div>

      <div className="sidebar__menu">
        <Nav vertical className="list-unstyled pb-3">
          <NavLink tag={Link} to={"/"}>
            Dashboard
          </NavLink>

          <NavLink tag={Link} to={"/departments"}>
            Departments
          </NavLink>

          <NavLink tag={Link} to={"/employees"}>
            Employees
          </NavLink>
        </Nav>
      </div>
    </div>
  )
}

export default Sidebar;
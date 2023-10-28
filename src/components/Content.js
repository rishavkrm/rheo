import { NavLink } from 'react-router-dom';

export default function Content() {
    const activeLinkStyle = {
  backgroundColor: '#4285f4', // Google blue
  color: '#fff', // White text
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '10px 2px',
  cursor: 'pointer',
};
    return (
        <ul className="nav nav-pills nav-fill bg-secondary bg-gradient" role="group" aria-label="Basic example">
            <li className="nav-item border border-2 p-2">
                <NavLink exact to="/" activeClassName="active-link" className="text-white">
                    Description
                </NavLink>
            </li>
            <li className="nav-item border border-2 p-2">
                <NavLink to="/participant" activeClassName="active-link" className="text-white">
                    Speakers
                </NavLink>
            </li>
            <li className="nav-item border border-2 p-2">
                <NavLink to="/program" activeClassName="active-link" className="text-white">
                    Program
                </NavLink>
            </li>
            <li className="nav-item border border-2 p-2">
                <NavLink to="/abstract" activeClassName="active-link" className="text-white">
                    Abstract
                </NavLink>
            </li>
            <li className="nav-item border border-2 p-2">
                <NavLink to="/document" activeClassName="active-link" className="text-white">
                    Posters
                </NavLink>
            </li>
            <li className="nav-item border border-2 p-2">
                <NavLink to="/participants" activeClassName="active-link" className="text-white">
                    Participants
                </NavLink>
            </li>
        </ul>

    );
}

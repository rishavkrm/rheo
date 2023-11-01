import { NavLink } from 'react-router-dom';

export default function Content() {
    console.log("Latest build deployed 3");
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
        <ul className="nav nav-pills nav-fill bg-secondary" role="group" aria-label="Basic example">
            <li className="nav-item border border-2 p-2">
                <NavLink exact to="/rheo/" style={{fontSize:'2vh'}} className="text-white">
                    Description
                </NavLink>
            </li>
            <li className="nav-item border border-2 p-2">
                <NavLink to="/rheo/participant" style={{fontSize:'2vh'}} className="text-white">
                    Speakers
                </NavLink>
            </li>
            <li className="nav-item border border-2 p-2">
                <NavLink to="/rheo/program" style={{fontSize:'2vh'}} className="text-white">
                    Program
                </NavLink>
            </li>
            <li className="nav-item border border-2 p-2">
                <NavLink to="/rheo/abstract" style={{fontSize:'2vh'}} className="text-white">
                    Abstract
                </NavLink>
            </li>
            <li className="nav-item border border-2 p-2">
                <NavLink to="/rheo/document" style={{fontSize:'2vh'}} className="text-white">
                    Posters
                </NavLink>
            </li>
            <li className="nav-item border border-2 p-2">
                <NavLink to="/rheo/participants" style={{fontSize:'2vh'}} className="text-white">
                    Participants
                </NavLink>
            </li>
        </ul>

    );
}

import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div>
                <ul>
                    <li>
                    {/* NavLink comprend la classe Active par défault */}
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}
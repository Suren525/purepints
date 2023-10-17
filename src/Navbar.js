import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Pure Pints</Link>
        <ul>
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/aboutUs">About Us</CustomLink>
            <CustomLink to="/contactUs">Contact Us</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
            {children}
            </Link>
        </li>
    )
}
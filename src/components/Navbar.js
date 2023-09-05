import "../styles/navbar.css"
import instructions from '../documents/instructions.pdf';
import roadmap from '../documents/Roadmap.pdf';



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top ">
            <div className="container">
                <a className="navbar-brand" href="/">ByteCraft</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/bytecraft-website">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/programs">Programs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={instructions} target="_blank">Instructions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={roadmap} target="_blank">Roadmap</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

import "../styles/footer.css"
import instructions from '../documents/instructions.pdf';
import roadmap from '../documents/Roadmap.pdf';

const Footer = () => {
    return (
        <div className="d-flex footer justify-content-center align-items-center">
            <div className="flex-column column column-1">
                <div className="flex-row">
                    <p className="bytecraft">ByteCraft</p>
                </div>
                <div className="flex-row d-inline-flex align-items-center">
                    <p>bytecraftersinfo@gmail.com</p>
                </div>
            </div>
            <div className="d-none d-md-block hide flex-column column align-self-start column-2">
                <p className="bold">Navigation</p>
                <p><a href="/bytecraft-website">About Us</a></p>
                <p><a href="/programs">Programs</a></p>
                <p><a href={instructions} target="_blank">Instructions</a></p>
                <p><a href={roadmap} target="_blank">Roadmap</a></p>

            </div>
            <div className="d-none d-md-block hide flex-column column align-self-start column-3">
                <p className="bold">Programs</p>
                <p><a href="https://www.coursera.org/learn/python" target="_blank">Python</a></p>
                <p><a href="https://www.coursera.org/learn/r-programming" target="_blank">R Programming</a></p>
                <p><a href="https://www.coursera.org/learn/web-development" target="_blank">Web Development</a></p>
                <p><a href="https://coursera.org/share/8e09182388ebdc420342bbf9e5f47402" target="_blank">Mobile Development</a></p>
                <p><a href="https://www.coursera.org/learn/data-science-ethics" target="_blank">Data Science Ethics</a></p>
            </div>
        </div >
    )
}

export default Footer;

import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <p>Luis Contreras</p>
            <ul>
                <li><a href="#home"><i class="fa-solid fa-house"></i></a></li>
                <li><a href="#aboutme">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="stop">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
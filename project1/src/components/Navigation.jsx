import './Navigation.css'
function Navigation() {
    return (
        <nav className='navigation'>
            <div className="logo">ANIMISTAA</div>
            <ul className="navbar">
                <li className="navlink active">home</li>
                <li className="navlink">About us</li>
                <li className="navlink">contact us</li>
            </ul>
        </nav>
    )
}
export default Navigation;
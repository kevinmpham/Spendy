export default function Navbar() {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <div className="navbar-brand">Spendy</div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>   
                    <li className="nav-item">
                        <a className="nav-link" href="/dashboard">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/help">Help</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}
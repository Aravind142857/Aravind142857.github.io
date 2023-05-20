function Header() {
    return (
    <nav id="navbar">
        <ul>
            <li><img src="tile000.png"></img></li>
            <li>Courses</li>
            <li>Projects</li>
            <li>Links</li>
        </ul>
    </nav>
    )
}

ReactDOM.render(<Header />, document.getElementById("head"))
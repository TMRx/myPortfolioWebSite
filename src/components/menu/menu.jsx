import './menu.scss'

export default function menu({ menuOpen, setMenuOpen}) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#hero">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Future</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">MyWorks</a>
                </li >
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">Motivation</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contacts</a>
                </li>
            </ul>
        </div>
    )
}

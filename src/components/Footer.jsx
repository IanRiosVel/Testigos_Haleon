import '../styles/Footer.css';
export default function Footer() {
return (
    <>
    <footer className='footer'>
        <p>&copy; 2025 Testigos Haleon | Publicis Groupe.</p>
        <p>All rights reserved.</p>
        <div>
            <img className= "logo_footer" src="https://i.postimg.cc/7Zgyxv8b/haleon.png" alt="Haleon Logo"/>
        </div>

        <div>        
            <nav>
            <ul >
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
            </ul>
            </nav>
        </div>
        
    </footer>
    </>
)
}
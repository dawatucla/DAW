import { Navbar } from "../components/Navbar.js";

function Home(){
    return (
        <body>
            <Navbar />
            <div class = "sub-body">
                <div class = "mission-statement">
                    <h1>ABOUT US</h1>
                    <p> Digital Audio Workspace is a music technology organization committed to providing a collaborative
                    space built on values of support and equity. Our goal is to bring together a diverse group of
                    students passionate about celebrating musicians and artists at the University of California, Los Angeles.
                    Each quarter, we offer frequent social programming and community events,
                    as well as opportunities to learn about and collaborate on electronic music.
                    </p>
                </div>
            </div>
          <footer>
                <p>© DAW 2025</p>
          </footer>
        </body>
);
}
export default Home;